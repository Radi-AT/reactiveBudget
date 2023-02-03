import './App.css';
import AddExpense from './components/AddExpense';
import DataList from './components/DataList';

function App() {

  return (
    <div className="App">
      <h1>Expenses list</h1>
      <AddExpense/>
      <DataList/>
    </div>
  );
}

export default App;
