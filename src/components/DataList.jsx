import { getCollection } from "../firebase/firestoroService";
import { useEffect, useState } from "react";

const DataList = () => {
  const [expenses, setExpenses] = useState([]);

  const getData = async () => {
    const { docs } = await getCollection("test");
    let formatted = [];
    docs.map((doc) => {
      formatted.push({
        id: doc.id,
        ...doc.data()
      });
    });
    setExpenses(formatted);
  };

  useEffect(() => {
    console.log('USE EFFECT HAPPENING');
    getData();
  }, []);

  return (
    <div className="">
      <h2>DataList</h2>
      <button onClick={() => getData()}>GET EXPENSES</button>
      <table role="grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>{doc.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
