import React, {useState} from 'react';
import './counter.css';

const CounterApp = (props) => {

    const initialState = {
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    };
    const [state, setState] = useState(initialState);

    const {counter1, counter2} = state;

    return (
        <>
            <h1>Counter1 {counter1} </h1>
            <h1>Counter2 {counter2} </h1>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setState({
                        ...state,
                        counter1: counter1+1
                    });
                }}
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;