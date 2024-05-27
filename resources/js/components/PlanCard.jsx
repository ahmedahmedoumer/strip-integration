// PlanCard.js
import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'; // Import icons
import { Link } from 'react-router-dom';

const PlanCard = ({ name, price, description, features,styling }) => {
    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${styling}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
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
            <div className="flex justify-left ml-4 font-bold text-lg mb-2"> price :${price / 100}</div>
            <div className="px-6 pt-4 pb-2 grid justify-center">
                <Link to={'/'}>
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-serif text-sm py-2 px-4 rounded">
                    Subscribe
                </button>
                </Link>
            </div>
        </div>
    );
};

export default PlanCard;

