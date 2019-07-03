import React, { useContext } from 'react';
import Context from '../context/context';

const Form = () => {

  const context = useContext(Context);

  console.log(context);

  const { names } = context;

  return (
    <div>
      TEST
<ul>
        {
          names.map((item) => {
            return item.name
          })
        }
      </ul>

    </div>
  )
}

export default Form;
