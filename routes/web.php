<?php

use Illuminate\Support\Facades\Route;
// use Laravel\Cashier\Http\Controllers\WebhookController;


Route::view('/{any?}', 'app')
      ->where('any','.*');

// Route::post('stripe/webhook', [WebhookController::class, 'handleWebhook']);