import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [detail, setDetail] = useState([]);
  const getData = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setDetail(data.data));
  };

  console.log(detail);
  return (
    <div className="App">
      <div className="container">
        <h1>Blue Wheals</h1>
        <button className="btn" onClick={getData}>
          Get User{" "}
        </button>
      </div>
      <div className="detail">
        <div className="heading">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Avtar</th>
              </tr>
            </thead>
            <tbody>
              {detail.length>0?detail.map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td><img src={item.avatar} className="img"/></td>
                </tr>
              )):<p className="error">No data found to display </p>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
