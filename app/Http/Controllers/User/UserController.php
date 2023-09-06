<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Models\Sport;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

 

class UserController extends Controller
{
    public function __construct()
    {
     $this->middleware('admin')->only([ 'index','delete'  ]);
   
    }

    // get all user
    public function index() {
         $allUser = User::all();
        //  $allUser =User::with('sports')->get();
       return response()->json( ['user' => $allUser,'status'=>true], 200);
      
    }

    //Show single user
    public function show(Request $request ) {
       $user = User::with('sports')->find($request->id);
        return response()->json(['user'=>$user->sports,'status'=>true],200);
    }

    //update a user
    public function update(Request $request)
    {
            $request->validate([
            'name' => 'required',
            'email' => 'unique:users',
            'user_name' => 'unique:users',
           
        ]);

        $user =  User::find($request->id);
        $user->name = $request->name;
        $user->user_name = $request->user_name;
        $user->email = $request->email;

        $user->save();
        if ($request->has('sports')) {
            $interest = Sport::whereIn('id', $request->interest)->get();
            $user->sports()->sync($interest);
        } else {
            $user->sports()->detach();
        }
        return response()->json(['message' => 'user Update successful.',], 201); 
    }
    
    // Delete profile
    public function delete(Request $request) {  
        $user = User::find($request->id);
        if(empty( $user)){
            return response()->json(
                [ 'message' => "user do not exist",
                  'status'=>false ]);
        }
         $user->delete();
         return response()->json([ 'message'=>'User deleted successfully!','status'=>true],200);

}

}
