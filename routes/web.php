<?php

use Illuminate\Support\Facades\Route;
// use Laravel\Cashier\Http\Controllers\WebhookController;
use App\Http\Controllers\PlanController;


// Route::post('stripe/webhook', [WebhookController::class, 'handleWebhook']);
Route::get('getPlan', [PlanController::class, 'getPlan']);
Route::view('/{any?}', 'app')
      ->where('any','.*');
