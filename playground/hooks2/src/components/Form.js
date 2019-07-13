import React, { useState, useContext } from 'react';
import Context from '../context/context';

const Form = () => {

  const context = useContext(Context);
  const { tasks, addTask, deleteTask } = context;



  const [value, setValue] = useState('')

  // console.log(tasks);


  const keyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }


  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value)
  }

  const handleAdd = () => {
    addTask(value);
    setValue('');
  }



  const handleDelete = (index) => {

    deleteTask(index)



  }


  return (
    <div>
      <h3>FORM</h3>
      {tasks.map((item, index) => <p key={index}>{item.task} <button onClick={() => handleDelete(index)}>DELETE</button></p>)}
      <input
        type="text"
        onChange={handleChange}
        value={value}
        onKeyDown={keyPress}
      />
      <p></p>
      <button
        onClick={handleAdd}

      >Submit</button>
    </div>
  )
}

export default Form
