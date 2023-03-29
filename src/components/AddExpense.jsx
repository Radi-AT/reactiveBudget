import './AddExpense.css';
import { useState } from "react";
import { addData } from '../firebase/firestoreService';

const AddExpense = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      addData('test', { title: title, amount: amount });
    } catch (error) {
      console.log('ERROR ON ADDING DATA: ', error);
      console.log('This is a test: ');
    }

    setTitle('');
    setAmount('');
  };

  return (
    <form className="addExpense container" onSubmit={ onSubmit }>
      <div>
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
          placeholder="Amount..."
          value={ amount }
          onChange={ (e) => setAmount(e.target.value) }
        />
      </div>
      <div>
        <select>
          <option value="" disabled>Categoria</option>
          <option>Super/General</option>
          <option>Juegos</option>
          <option>Restaurantes</option>
        </select>
      </div>
      <div>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default AddExpense;