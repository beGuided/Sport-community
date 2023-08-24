<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         
        $user = User::where('email', 'admin@email.com')->first();
        if(!$user){
            User::create([
            'name'=> 'Admin Team',
            'user_name'=> 'admin',
            'phone_number'=>9000000,
            'email'=> 'admin@email.com',
            'role'=>'admin',
            'email_verified_at' => now(),
            'password' => Hash::make('secret')
            ]);
        };

        // $user= new User([                                    
        //     'name' => 'AdminTeam ',
        //    'email' =>'adminteam@email.com',
        //    'role' =>'admin',
        //    'email_verified_at' => now(),
        //    'password' => Hash::make('AdminTeam@DCI')     
        //       ]);  $user->save() ;
    
    }
}
