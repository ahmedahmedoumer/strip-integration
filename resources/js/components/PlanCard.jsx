// PlanCard.js
import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'; // Import icons

const PlanCard = (props) => {
    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${props?.styling}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props?.plan?.name}</div>
                <p className="text-gray-700 text-base">{props?.plan?.description}</p>
            </div>
            <div className="px-6 py-4">
                <ul>
                    {props?.plan?.features.map((feature, index) => (
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
            <div className="flex justify-left ml-4 font-bold text-lg mb-2"> price :${props?.plan?.price / 100}</div>
            <div className="px-6 pt-4 pb-2 grid justify-center">
                <button  onClick={()=>{props?.setSelected(props?.plan);props?.setIsVisible(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-serif text-sm py-2 px-4 rounded">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default PlanCard;

