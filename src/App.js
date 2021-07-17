import ExpenseItem from './components/Expenses';

function App() {
  const expenses = [
    { id: "e1", title: 'Car Insurance', amount: 194.67, date: new Date(2021, 2, 10) },
    { id: "e2", title: 'Bike Insurance', amount: 29.67, date: new Date(2021, 1, 20) },
    { id: "e3", title: 'Health Insurance', amount: 500.17, date: new Date(2021, 3, 10) },
  ];
  return (
    <div>
      <ExpenseItem data={expenses} />
    </div>
  )
}

export default App;
