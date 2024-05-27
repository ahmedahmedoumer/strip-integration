// components/SubscriptionPlans.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlanCard from '../components/PlanCard';
import { getPlanData } from '../store/actions/counterActions';
// import { getPlanData } from '../store/actions/counterActions';

const SubscriptionPlans = (props) => {
    useEffect(() => {
        props.getPlanListData();
    }, []);

    console.log(props?.data,"*******")

    const dummyPlans = [
        {
            id: 1,
            name: 'Basic Plan',
            price: 1000, // $10.00
            description: 'Basic features included. View all features: true',
            features: [
                { name: 'Feature 1', enabled: true },
                { name: 'Feature 2', enabled: false },
                { name: 'Feature 3', enabled: true },
                { name: 'Feature 4', enabled: false },
            ],
        },
        {
            id: 2,
            name: 'Standard Plan',
            price: 2000, // $20.00
            description: 'More features included. View all features: false',
            features: [
                { name: 'Feature 1', enabled: true },
                { name: 'Feature 2', enabled: true },
                { name: 'Feature 3', enabled: true },
                { name: 'Feature 4', enabled: false },
            ],
        },
        {
            id: 3,
            name: 'Premium Plan',
            price: 3000, // $30.00
            description: 'All features included. View all features: true',
            features: [
                { name: 'Feature 1', enabled: true },
                { name: 'Feature 2', enabled: true },
                { name: 'Feature 3', enabled: true },
                { name: 'Feature 4', enabled: true },
            ],
        },
    ];
    const newData=props?.data?.map((data,index)=>{
          return {
            ...data,
            features:dummyPlans[index]?.features??[],
          }
    });
    
  console.log(newData,"data");
    

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-center my-8">Choose Your Plan</h1>
            <div className="grid grid-cols-3 gap-8">
                {newData?.map(plan => (
                    <PlanCard
                        key={plan.id}
                        styling="hover:scale-110"
                        name={plan.name}
                        price={plan.price}
                        description={plan.description}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.counter.data,
    loading: state.counter.loading,
    error: state.counter.error,
});

const mapDispatchToProps = (dispatch) => ({
    getPlanListData: () => dispatch(getPlanData()),
});

export default connect(mapStateToProps,mapDispatchToProps)(SubscriptionPlans);
