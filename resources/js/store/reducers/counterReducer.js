const initialState = {
    count: 0,
    data:[],
    loading:false,
    error:null
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'GET_PLANS':
          return { ...state, data: action.payload };
      default:
        return state;
    }
  };

  export default counterReducer;
  