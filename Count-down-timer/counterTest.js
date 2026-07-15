import React from 'react';
import CountDownTimer from './countDownTimer.js';
import './countDownTimer.css';

const CounterTest = () => {
    const handleTimeFinish = () => {
        console.log('come here')
    }
    return (
        <div className='countdown-timer-container'>
            <h1>Count Down Timer - 3</h1>
            <CountDownTimer initialTime={300} onTimeFinish={handleTimeFinish} />
        </div>
    )
}

export default CounterTest