import { snapshotSub } from "../firebase/firestoreService";
import { useEffect, useState } from "react";

const DataList = () => {
  const [expenses, setExpenses] = useState([]);
  const [syncData, setSyncData] = useState([]);

  useEffect(() => {
    const unsubscribe = snapshotSub('test', setSyncData);

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    let formatted = [];
    syncData.map((doc) => {
      formatted.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setExpenses(formatted);
  }, [syncData]);

  const testing = () => console.log('TESTING ', );

  return (
    <div className="">
      <h2>Data List</h2>
      <button onClick={() => testing()}>TESTING</button>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
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
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataList;
