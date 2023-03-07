
import React, {useState, useEffect} from 'react';

import './App.css';

import Filter from './componets/Filter';
import Cards from './componets/Cards';

function App() {
  // получаем данные с сервера и записываем их в хук
  const [data, setData] = useState([])
  const url = 'https://63f4e22355677ef68bc5fb32.mockapi.io/emoji';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  //данный получаенные с инпута 
  const [text, setText] = useState('')
  const handleNameChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      
      <Filter handleNameChange={handleNameChange} />
    
      <Cards data={data} text={text}  />

    </>
  );
}

export default App;
