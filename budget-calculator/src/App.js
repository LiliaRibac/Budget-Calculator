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
  // State value

  // all expenses , add expense
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState('');

  // single amount
  const [amount, setAmount] = useState('');
  // functionality

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    } else {
      // handle alert called
    }
  };

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <Form
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <List expenses={expenses} />
      </main>
      <h1>
        total spending :{' '}
        <span className="total">
          ${' '}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
