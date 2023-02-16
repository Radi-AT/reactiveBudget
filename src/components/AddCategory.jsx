import { useState } from 'react';
import { addCategory } from '../firebase/firestoreService';

const AddCategory = () => {
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      addCategory('Radi', `radi/categories/${category}`);
    } catch (error) {
      console.log('ERROR ON ADDING CATEGORY: ', error);
    }
  };

  return (
    <>
      <h2>AddCategory</h2>
      <form className="addExpense container" onSubmit={ onSubmit }>
        <div>
          <input
            type="text"
            name="category"
            placeholder="Category..."
            value={ category }
            onChange={ (e) => setCategory(e.target.value) }
          />
        </div>
        <div>
          <button type="submit">Create category</button>
        </div>
      </form>
    </>
  );
};

export default AddCategory;