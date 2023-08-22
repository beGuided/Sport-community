<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

 

class UserController extends Controller
{

    public function index() {
      $allUser = User::all();
       return response()->json( ['user' => $allUser,'status'=>true], 200);
      
    }

    //Show single user
    public function show(Request $request ) {
       $user = User::find($request->id);
        return response()->json(['user'=>$user,'status'=>true],200);
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
