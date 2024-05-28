import axios from "axios";

export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  export const getPlans = (data) => ({
    type: 'GET_PLANS',
    payload:data,
  });
  export const createSubscriptionSuccess = (data) => ({
    type: 'CREATE_SUBSCRIPTION',
    payload:data,
  });

  export const getPlanData = () => {
    return (dispatch) => {
      // dispatch({ type: 'FETCH_PLANS_REQUEST' });
  
      axios({
        method: 'get',
        url: '/getPlan', // Replace with your actual endpoint
        headers: {
          Authorization: 'Bearer YOUR_AUTH_TOKEN', // Replace with your actual auth token
        },
      })
        .then((response) => {
          dispatch(getPlans(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  export const createSubscription=(paymentData)=>{
    console.log(paymentData,'paymentData')
    return(dispatch)=>{
      axios({
        url:'/subscription',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you're using token-based authentication
        },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            email: email,
            plan: 'price_1PKyy7FlHt4LRnKPkkzBF0Gj', // Replace with your actual plan ID
        })
        .then((response)=>{
          dispatch(createSubscriptionSuccess(response?.data))
           console.log(data)
        })
        .catch((error)=>{
          console.log(error);
        })
    });
    } 
  }
 
  
  