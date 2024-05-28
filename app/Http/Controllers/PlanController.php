<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Plan;
use Stripe\Stripe;
use Stripe\User;
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
            Stripe::setApiKey(config('stripe.secret'));
    
            // Retrieve payment method and customer information from request
            $paymentMethodId = $request->input('paymentMethodId');
            $email = $request->input('email');
            $plan = $request->input('plan'); // Plan ID from your Stripe account
            // Create a new customer
            // $customer = User::create([
            //     'email' => $email,
            //     'payment_method' => $paymentMethodId,
            //     'invoice_settings' => [
            //         'default_payment_method' => $paymentMethodId,
            //     ],
            // ]);
    
            // Create a subscription
            // $subscription = Subscription::create([
            //     'customer' => $customer->id,
            //     'items' => [[
            //         'plan' => $plan,
            //     ]],
            //     'expand' => ['latest_invoice.payment_intent'],
            // ]);
    
            return response()->json($request->all());
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
