import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
    useEffect(()=>{
       console.log("ahmedin")
    },[count])
  return (
    <div className="text-center">
      <h1 className="text-2xl">Counter: {count}</h1>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 m-2"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
