<?php
namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;

use  App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Sport;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Auth\Events\Verified;
 

class AuthController extends Controller
{   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
  
        $formFields = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'user_name' => 'required|unique:users',
            'password' => 'required|min:6|confirmed',
            'phone_number' => 'required|max:20|unique:users',
            
        ]);

        // Hash Password
        $formFields['password'] = bcrypt($formFields['password']);
        $user = User::create($formFields);

        if ($request->has('sports')) {
            $user->sports()->attach($request->input('sports'));
        }

        event(new Registered($user));
       $token = $user->createToken('myapptoken')->plainTextToken;
       
        $response = [
            'message' => 'Registration successful. Please check your email for verification link.',
             'user'=> $user,
             'token' => $token ];
        return response($response, 201); 

    }

    
    public function verifyEmail($id, $hash)
    {
        $user = User::find($id);
        abort_if(!$user, 405);
        abort_if(!hash_equals($hash, sha1($user->getEmailForVerification())), 405);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            event(new Verified($user));        
            }
            return response(['message' => 'Email verified', 'status'=>true ]);
        
    }

    // login in with emailand password
      public function login(Request $request) {
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required|min:6'
        ]);
        // Hash Password
        $user = User::where('email', $formFields['email'])->first();

        if(!$user || !Hash::check($formFields['password'], $user->password)) {
            return response(['message' => 'Invalid login creds'  ], 401);
        }

        if($user->email_verified_at == null) {
            $user->sendEmailVerificationNotification();
            return response([
                'message' => 'Please check your email for verification link',
                'status'=>false
            ], 402);
        }

       $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [ 
            'user'=> $user, 
            'token' => $token ,
            'verified' => true,  ];
        return response($response, 200); 
    }


    // login in with phone number
    public function login2(Request $request) {
        $formFields = $request->validate([
            'fone_number' => ['required', 'phone_number'],
        ]);

        $user = User::where('phone_number', $formFields['phone_number'])->first();
        if(!$user ) {
            return response([ 'message' => 'Invalid login creds' ], 401);
        }
       $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [ 
            'user'=> $user,   'token' => $token   ];
        return response($response, 201); 
    }



    // Logout User
    public function logout(Request $request) {
       $request->user()->currentAccessToken()->delete();
       
        return response([ 'message' => 'User Logged out ' ]);
    }
  
    // Authenticate User
   
}
