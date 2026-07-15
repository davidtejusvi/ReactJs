import React from 'react';
import './kanban.css'
import Board from './Board/Board';

const Kanaban = () => {
  return (
    <div className='app'>
      <div className='app_navbar'></div>
      <h2>Kanaban</h2>
      <div className='app_outer'>
        <div className='app_board'>
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  )
}

export default Kanaban