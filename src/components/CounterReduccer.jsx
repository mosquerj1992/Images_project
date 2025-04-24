import React, { useReducer } from "react";
import { reducer } from "../helpers/CounterReduccer";
export const CounterReducer = () => {

    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            FormReducer
            <h2>contador:{state.count}</h2>

            <button
                className="bg-gray-800 text-white px-4 px-2 rounded hover:bg-gray-500 mr-2"
                onClick={() => dispatch({ type: 'decrementar' })}
            >
                decrementar
            </button>

            <button className="bg-gray-800 text-white px-4 px-2 rounded hover:bg-gray-500 mr-2"
                onClick={() => dispatch({ type: 'resetear' })}
            >
                resetear
            </button>
            <button className="bg-gray-800 text-white px-4 px-2 rounded hover:bg-gray-500 mr-2"
                onClick={() => dispatch({ type: 'incrementar' })}
            >
                incrementar
            </button>

        </div>
    );
};



