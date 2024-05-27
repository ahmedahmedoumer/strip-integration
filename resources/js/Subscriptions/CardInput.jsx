import React, { useState } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'; // Import icons

const CardInput = ({ name, price, description, features }) => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        setSubscribed(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="font-bold text-xl mb-2">${price / 100}</div>
                {!subscribed ? (
                    <button onClick={handleSubscribe} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Subscribe
                    </button>
                ) : (
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Confirm Subscription
                        </button>
                    </div>
                )}
            </div>
            {subscribed && (
                <div className="px-6 py-4">
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                {feature.enabled ? (
                                    <FiCheckCircle className="text-green-500 mr-2" />
                                ) : (
                                    <FiXCircle className="text-red-500 mr-2" />
                                )}
                                <span className="text-gray-700">{feature.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CardInput;
