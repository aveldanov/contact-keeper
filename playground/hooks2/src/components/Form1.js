import React, { useState } from 'react'

const Form = () => {


  // state = {
  //   tasks: [
  //     { task: 'task1' },
  //     { task: 'task2' },
  //     { task: 'task3' }
  //   ],
  //   value: ''
  // }


  const [tasks, setTasks] = useState([
    { task: 'task1' },
    { task: 'task2' },
    { task: 'task3' }]);

  const [value, setValue] = useState('')

  console.log(tasks);



  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value)

  }

  const handleAdd = () => {
    setTasks([...tasks, { task: value }]);
    setValue('')
  }

  const handleDelete = (index) => {

    const updatedTasks = tasks.filter((item, j) => {
      // console.log('index', index);
      // console.log('j = ', j)
      return (
        index !== j
      )
    })
    setTasks(updatedTasks)


  }


  return (
    <div>
      <h3>FORM</h3>
      {tasks.map((item, index) => <p key={index}>{item.task} <button onClick={() => handleDelete(index)}>DELETE</button></p>)}
      <input
        type="text"
        onChange={handleChange}
        value={value}
      />
      <p></p>
      <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Form
