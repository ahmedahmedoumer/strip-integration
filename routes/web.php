<?php

use Illuminate\Support\Facades\Route;
// use Laravel\Cashier\Http\Controllers\WebhookController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\AuthController;



// Route::post('stripe/webhook', [WebhookController::class, 'handleWebhook']);
Route::get('getPlan', [PlanController::class, 'getPlan']);
Route::post('/create-subscription', [PlanController::class, 'create']);



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout']);

// Route::post('/create-subscription', function(){
//       return "hello ahmedin";
// });

Route::view('/{any?}', 'app')
      ->where('any','.*');
