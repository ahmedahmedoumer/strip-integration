import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';

const stripePromise = loadStripe('pk_test_51PJwwHFlHt4LRnKPKt1K6dyhUtB0rNmyBwSTqu84NDdLiZtYdfzfwQA0Ohc5yNfnShKDKImyTZa5cA2L01pIioDF00PTSv6bnC');

const CardInput = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubscription = async () => {
        setError(null); // Clear any previous errors

        if (!email) {
            setError('Email is required.');
            return;
        }
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Create a payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email,
            },
        });

        if (error) {
            setError(error.message);
            return;
        }

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send payment method and subscription details to your backend
        const response = await fetch('/create-subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Add the authorization token
            },
            body: JSON.stringify({
                paymentMethodId: paymentMethod.id,
                email: email,
                plan: 'price_1PKyy7FlHt4LRnKPkkzBF0Gj', // Replace with your actual plan ID
            }),
        });

        const data = await response.json();

        if (data.error) {
            setError(data.error.message);
            return;
        }

        console.log('Subscription successful:', data);
        // Perform any additional actions after successful subscription
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubscription(); }}>
            <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <CardElement />
            {error && <div>{error}</div>}
            <button type="submit" disabled={!stripe}>Subscribe</button>
        </form>
    );
};

const PlanCardWithStripe = () => (
    <Elements stripe={stripePromise}>
        <CardInput />
    </Elements>
);

const mapStateToProps = (state) => ({
    data: state.counter.data,
});

const mapDispatchToProps = (dispatch) => {
    return {
        createSubscription: (data) => dispatch(createSubscription(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanCardWithStripe);
