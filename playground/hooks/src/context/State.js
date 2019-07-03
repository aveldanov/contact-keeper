import React, { useReducer } from 'react';
import Context from './context';
import { ADD_NAME } from './types';
import reducer from './reducer';

const State = props => {

  const initialState = {
    names: [{
      name: 'Anton'
    },
    { name: 'Ivan' }]
  }


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        names: state.names
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default State;
