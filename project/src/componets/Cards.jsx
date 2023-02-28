import React from 'react'
import { useEffect, useState } from 'react';
import st from './cards.module.css';

function Cards() {
    const [data, setData] = useState([])
  
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
      <main>
          {data.map((elem, index) => (
              <div key={index} className={st.card}>
                  <div className={st.emoji}>{elem.symbol}</div>
          <h3 >{elem.title}</h3>
          <p>{elem.keywords}</p>
        </div>
      ))}
    </main>
  )
}

export default Cards