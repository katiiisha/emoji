
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
 // пагинация 
  // общее количество страниц
  const [CardsPerPage] = useState(12)
  //текущая страница
  const [CurrentPage, setCurrentPage] = useState(1); 
// определение индекса первой и последней карточки 
  const lastCardIndex = CurrentPage * CardsPerPage;
  const firstCardIndex = lastCardIndex - CardsPerPage; 
  // получили первые 12 карточек из полученного с сервера массива 
  const currentCards = data.slice(firstCardIndex, lastCardIndex)
console.log(currentCards);
  return (
    <>
      
      <Filter handleNameChange={handleNameChange} />
    
      <Cards data={data} text={text}  />

    </>
  );
}

export default App;
