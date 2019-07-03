import React from 'react';
import './App.css';
import Form from './components/Form';
import State from './context/State';

const App = () => {
  return (
    <State>
      <div className="App">
        <Form />
      </div>

    </State>

  );
}

export default App;
