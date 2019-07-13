import React from 'react';
import './App.css';
import Form from './components/Form';
import State from './context/State';

function App() {
  return (
    <State>
      <div className="App">
        <Form />
      </div>

    </State>

  );
}

export default App;
