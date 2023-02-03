import { getCollection } from "../firebase/firestoroService";
import { useState } from "react";

const getData = async () => {
  const { docs } = await getCollection("test");
  let formatted = [];
  docs.map((doc) => {
    formatted.push([{
      id: doc.id,
      ...doc.data()
    }]);
  });

  console.log('FORMATTED: ', formatted);

  return formatted;
};

const DataList = () => {
  const [data, setData] = useState([]);

  return (
    <div className="">
      <h2>DataList</h2>
      <button onClick={() => setData(getData)}>GET DATA</button>
      <table role="grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.id}
          {/* {data.forEach((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>{doc.amount}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
