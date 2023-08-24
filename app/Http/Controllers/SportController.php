<?php

namespace App\Http\Controllers;
use App\Models\Sport;

use Illuminate\Http\Request;


class SportController extends Controller
{


     
    public function __construct()
    {
     $this->middleware('admin')->only([ 'update','store','delete' ]);
   
    }

    public function index(){
        $sports = Sport::all();
        return response()->json(['sports'=>$sports, 'status'=>true],200);
    }


    public function show(Request $request){
        $sport = Sport::find($request->id);
        return response()->json(['sport'=>$sport, 'status'=>true],200);
    }


    public function store(Request $request){
        $request->validate([ 'name' => 'required|string' ]);
      
        $newSport = Sport::create([
            'name'=>$request->name
        ]);
        return response()->json(['newSport'=>$newSport, 'status'=>true],200);
    }

    
    public function update(Request $request){
        $request->validate([ 'name' => 'required|string' ]);
        
        $updateSport = Sport::find($request->id);

        $updateSport->name = $request->name; 
        $updateSport->save();
        return response()->json(['newSport'=>$updateSport, 'status'=>true],200);
    }



    public function delete(Request $request){
        $sport = Sport::find($request->id);
        if(empty( $sport)){
            return response()->json(
                [ 'message' => "user do not exist",
                  'status'=>false ]);
        }
        $sport->delete();
        return response()->json(['newSport'=>'sport deleted successfully!', 'status'=>true],200);
        }


}
