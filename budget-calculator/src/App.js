import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

import Alert from './components/Alert';

function App() {
  return (
    <>
      <Alert />
      <Form />
      <List />
    </>
  );
}

export default App;
