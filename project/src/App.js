import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('');
  const url = 'https://63f4e22355677ef68bc5fb32.mockapi.io/emoji';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  // console.log(data);
  function filterData() {
    
  }

  return (
    <>
      <input type="text" placeholder='Найти свой эмоджи...' onChange={(name) => setFilter(name.target.value) }/>
      {data.map((elem, index) => (
        <div key={index}>
          <div>{elem.symbol}</div>
          <h3 >{elem.title}</h3>
          <p>{elem.keywords}</p>
        </div>
      ))}

    </>
  );
}

export default App;
