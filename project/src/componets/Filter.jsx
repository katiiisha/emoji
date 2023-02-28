import React from 'react'
import s from './fliter.module.css';

function Filter() {
    const [filter, setFilter] = React.useState('');
  return (
      <header>
          <h1>Emoji Finder</h1>
          <h2>Find emoji by keywords</h2>
          <input type="text" placeholder='Найти свой эмоджи...' className={s.inp_filter} onChange={(name) => setFilter(name.target.value) }/>
    </header>
  )
}

export default Filter