<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Plan;


class PlanController extends Controller
{
    //
    public function getPlan(Request $request){
         return response()->json(Plan::all(), 200); ;
    }
}
