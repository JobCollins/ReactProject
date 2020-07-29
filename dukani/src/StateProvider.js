// set up data layer
// tracks cart

import React, { createContext, useReducer , useContext} from "react";

//data layer
export const StateContext = createContext();

//build a provider to wrap entire app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
