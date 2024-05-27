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
  
  