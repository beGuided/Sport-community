<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EmailVerificationController;
use App\Http\Controllers\Api\NewPasswordController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\SportController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'v1'], function () {
        
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::post('password/forgot-password', [NewPasswordController::class, 'forgotPassword']);
    Route::post('password/reset', [NewPasswordController::class, 'reset']);
    Route::get('/email/verify-email/{id}/{hash}', [AuthController::class, 'verifyEmail'])->name('verification.verify')->middleware(['signed',]);
    Route::get('/sports', [SportController::class, 'index']);

});

 Route::group(  ['middleware'=> ['auth:sanctum',],  'prefix' => 'v1' ], function () {  
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::patch('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'delete']);
    

    Route::get('/sports/{id}', [SportController::class, 'show']);
    Route::post('/sports', [SportController::class, 'store']);
    Route::patch('/sports/{id}', [SportController::class, 'update']);
    Route::delete('/sports/{id}', [SportController::class, 'delete']);

});


         

Route::middleware('auth:sanctum','verified')->get('v1/user', function (Request $request) {
    return $request->user();
});
