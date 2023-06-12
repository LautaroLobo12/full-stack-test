import React from 'react';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/all').then((res) => res.json()).then((data) => setData(data));
  }, []);

  console.log(data);

  // data: List<Map> = [
  //   {
  //     NAME: STRING,
  //     SECOND_NAME: STRING || null,
  //     SURNAME: STRING,
  //     AGE: INTEGER || null,
  //     UUID: STRING
  //   }
  // ]

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <table className="Table">
          <thead align="left">
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>UUID</th>
            </tr>
          </thead>
          <tbody>
              {data?.map(user => (
                <tr key={user.UUID}>
                  <td>
                    {user.NAME} {user.SECOND_NAME} {user.SURNAME}
                  </td>
                  <td>
                    {user.AGE ?? 'unknowkn'}
                  </td>
                  <td>
                    {user.UUID}
                  </td>
                </tr>
                ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
