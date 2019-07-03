import React, { useContext } from 'react';
import Context from '../context/context';

const Form = (props) => {

  const context = useContext(Context);

  console.log(props);



  const [names, setNames] = React.useState([{
    name: 'Anton'
  },
  { name: 'Ivan' }]);

  console.log(names);

  const [value, setValue] = React.useState('')


  // state = {
  //   names: [{
  //     name: 'Anton'
  //   },
  //   { name: 'Ivan' }],
  //   value: 'new'
  // }
  //   ;


  const onChange = e => setValue(e.target.value);

  const handleAdd = () => {
    setNames(
      [...names,
      { name: value }
      ]
    )

    setValue(
      ''
    )
  }

  return (
    <div>
      {props.title}
      <br />
      <input value={value} type="text" onChange={onChange}>

      </input>
      <ul>
        {
          names.map((item) => {
            return <li>{item.name}</li>
          })
        }

      </ul>



      <p>{value}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Form;
