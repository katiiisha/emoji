  // import React, {useState} from 'react';
import s from './fliter.module.css';

function Filter({ handleNameChange}) {    
  return (
      <header>
          <h1>Emoji Finder</h1>
          <h2>Find emoji by keywords</h2>
      <input type="text" placeholder='Найти свой эмоджи...' className={s.inp_filter} onChange={handleNameChange} />
    </header>
  )
}

export default Filter