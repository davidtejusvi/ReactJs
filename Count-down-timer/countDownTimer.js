import React, { useEffect, useRef, useState } from 'react';
import './countDownTimer.css';

const CountDownTimer = ({ initialTime, onTimeFinish }) => {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef();
    const handlePauseAndResume = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(initialTime);
        setIsRunning(false);
    };
    const handleStart = () => {
        setIsRunning(true)
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        if (onTimeFinish) {
                            onTimeFinish();
                        }
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000); // Moved this line inside the setInterval function
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning, onTimeFinish]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div>
            <div className='timer'>
                <p>{String(minutes).padStart(2, '0')} :
                    {String(seconds).padStart(2, '0')}
                </p>
                <div className='timer-buttons'>
                    <button onClick={handlePauseAndResume}>{isRunning ? 'Pause' : 'Resume'}</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleStart}>Start</button>
                </div>
            </div>
        </div>
    );
};

export default CountDownTimer;