import React from 'react';
import './card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../chip/Chip';

const Card = () => {
    return (
        <div className='card'>
            <div className='card_top'>
                <div className='card_top_labels'>
                    <Chip text='FrontEnd' color='green' />
                </div>
                <MoreHorizontal />
            </div>
            <div className='card_title'>
                rwhgjhjwlrgrwgr
            </div>
            <div className='card_footer'>
                <p><Clock />29 oct</p>
                <p><CheckSquare /> </p>
            </div>
        </div>
    )
}

export default Card