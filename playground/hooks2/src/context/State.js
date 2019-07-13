import React, { useReducer } from 'react';
import Context from './context';
import reducer from './reducer';
import {
  ADD_TASK,
  DELETE_TASK
} from './types';


const State = (props) => {
  const initialState = {
    tasks: [
      { task: 'task11' },
      { task: 'task22' },
      { task: 'task33' }
    ],
    value: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  const addTask = (value) => {
    dispatch({
      type: ADD_TASK,
      payload: value
    })
  }

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }



  return (
    < Context.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask
      }
      }
    >
      {props.children}

    </Context.Provider >
  )
}

export default State;
