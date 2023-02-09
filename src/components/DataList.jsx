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
        ...doc.data()
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
