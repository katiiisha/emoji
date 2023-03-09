import React from 'react'

function Paginate({setCurrentPage, currentPage, currentCards}) {
    

// заполнение массива нужным количеством страниц
  let startPage = 0;
  let endPage = 0;
  const pageNumbers = [];
  for (let i = 1; i <= currentCards; i++) {
    pageNumbers.push(i);
  }
//опреляем как будут отображать страницы 
  if (currentPage === 1 || currentPage === 2 ) {
    startPage = 0;
    endPage = 5;
  } else if (
    currentPage === currentCards ||
    currentPage === currentCards - 1 || currentPage === currentCards - 2
  ) {
    startPage = currentCards - 5;
    endPage = currentCards;
  } else if (currentPage > 2) {
    startPage = currentPage - 3;
    endPage = currentPage + 2;
  }

  return (
      <div>
        {currentPage === 1 ? (
          <button
            disabled={true}
            onClick={() => setCurrentPage(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(pageNumbers[pageNumbers[0] - 1])}
          >
            First
          </button>
          )}
          {pageNumbers.slice(startPage, endPage).map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
          ))}
          {currentPage === currentCards ? (
          <button
            disabled={true}
            onClick={() => setCurrentPage(pageNumbers.length)}
          >
            Last
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(pageNumbers.length)}
          >
            Last
          </button>
        )}
    </div>
    
  )
}

export default Paginate