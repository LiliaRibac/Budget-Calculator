import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  { id: uuidv4(), charge: 'rent', amount: 1600 },
  { id: uuidv4(), charge: 'car', amount: 400 },
  { id: uuidv4(), charge: 'credit bill', amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  console.log(expenses, setExpenses);
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <Form />
        <List expenses={expenses} />
      </main>
      <h1>
        total spending :{' '}
        <span className="total">
          ${' '}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
