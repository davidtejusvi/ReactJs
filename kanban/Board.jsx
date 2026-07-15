import React from 'react'
import { MoreHorizontal } from 'react-feather';
import './board.css'
import Card from '../card/Card';

const Board = () => {
    return (
        <div className='board'>
            <div className='board_top'>
                <p className='board_top_title'>TO DO
                    <span>2</span>
                </p>
                <MoreHorizontal />
            </div>
            <div className='board_cards'>
                <Card />
            </div>
        </div>
    )
}

export default Board