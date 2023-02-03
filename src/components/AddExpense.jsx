import './AddExpense.css';
import { useState } from "react";

const AddExpense = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <form className="addExpense" action="">
      <input
        type="text"
        name="title"
        placeholder="Title..."
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
      />
      <input
        type="number"
        name="amount"
        value={ amount }
        onChange={ (e) => setAmount(e.target.value) }
      />
      <button type="submit">Add expense</button>
    </form>
  );
};

export default AddExpense;