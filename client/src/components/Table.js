import React, { useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/clients");
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td>{item.phone}</td>
                <td>{item.token}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
