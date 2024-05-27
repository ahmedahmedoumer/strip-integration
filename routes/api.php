<?php

use App\Http\Controllers\PlanController;
use Illuminate\Support\Facades\Route;


Route::get('/getPlan', function(){
    return  response()->json("ahmedin",200);
});


Route::fallback(function () {
    return response()->json(['message' => 'Not Found'], 404);
});