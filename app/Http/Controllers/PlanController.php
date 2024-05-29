<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Plan;
use Stripe\Stripe;
use Stripe\User;
use Illuminate\Support\Facades\Auth;
use Stripe\Subscription;
use Stripe\PaymentMethod;


class PlanController extends Controller
{
    //
    public function getPlan(Request $request){

         return response()->json(Plan::all(), 200); ;
    }
    public function create(Request $request)
        {
            $user = auth()->user(); // Get the authenticated user

        // Check if the user is already a Stripe customer
        if (!$user->hasStripeId()) {
            // Create the user as a Stripe customer
            $user->createAsStripeCustomer();
        }

        // Create the subscription
        $paymentMethod = $request->paymentMethodId;

        try {
            $user->newSubscription('default', 'price_1PKyy7FlHt4LRnKPkkzBF0Gj') // Replace with your actual plan ID
                ->create($paymentMethod);
                
            return response()->json(['success' => true], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
            // $user = Auth::user(); // Get the authenticated user

            // $paymentMethodId = $request->input('paymentMethodId');
            // $plan = $request->input('plan'); // Plan ID from your Stripe account
    
            // try {
            //     // Update user's default payment method
            //     $user->updateDefaultPaymentMethod($paymentMethodId);
    
            //     // Create subscription
            //     $user->newSubscription('default', $plan)->create($paymentMethodId);
    
            //     return response()->json(['message' => 'Subscription created successfully']);
            // } catch (\Exception $e) {
            //     return response()->json(['error' => $e->getMessage()], 500);
            // }
            // return response()->json($request->all());
        }
    

//         use Illuminate\Http\Request;
// use App\Models\User;
// // use Illuminate\Support\Facades\Auth;
// public function create(Request $request)
//     {
//         $user = Auth::user(); // Get the authenticated user

//         $paymentMethodId = $request->input('paymentMethodId');
//         $plan = $request->input('plan'); // Plan ID from your Stripe account

//         try {
//             // Update user's default payment method
//             $user->updateDefaultPaymentMethod($paymentMethodId);

//             // Create subscription
//             $subscription = $user->newSubscription('default', $plan)->create($paymentMethodId);

//             return response()->json(['subscription' => $subscription]);
//         } catch (\Exception $e) {
//             return response()->json(['error' => $e->getMessage()], 500);
//         }

//     
  }
