import React from 'react';
import ExpenseItem from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { id: "1", title: 'Car Insurance', amount: 194.67, date: new Date(2021, 2, 10) },
    { id: "2", title: 'Bike Insurance', amount: 29.67, date: new Date(2021, 1, 20) },
    { id: "3", title: 'Health Insurance', amount: 500.17, date: new Date(2021, 3, 10) },
  ];
  return (
    <div>
      <ExpenseItem data={expenses} />
    </div>
  )
}
export default App;
