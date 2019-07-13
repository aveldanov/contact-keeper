import { ADD_TASK, DELETE_TASK } from './types';


export default (state, action) => {
  console.log("State:  ", state);
  console.log("Action: ", action);



  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          task: action.payload
        }]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item, id) => {
          return id !== action.payload
        })
      }


    default:
      return state

  }




}