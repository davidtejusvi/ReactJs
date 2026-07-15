import React, { useEffect, useRef, useState } from 'react';
import './twoFactor.css'

const TwoFactorCodeInput = () => {
    const emptArr = ['', '', '', ''];
    const refs = [useRef(), useRef(), useRef(), useRef()]
    const [inputs, setInputs] = useState(emptArr);
    const [missing, setMissing] = useState(emptArr);

    const handleInputChange = (e, index) => {
        const val = e.target.value;
        console.log(val, index)
        if (!Number(val)) return;

        if (index < inputs.length - 1) {
            refs[index + 1].current.focus()
        }

        const copyInputs = [...inputs];
        copyInputs[index] = val;
        setInputs(copyInputs)

    }
    console.log("inputs", inputs)

    const handleKeyDown = (e, index) => {
        console.log(e.keyCode, index)
        if (e.keyCode === 8) {
            const copyInputs = [...inputs];
            copyInputs[index] = '';
            setInputs(copyInputs)
            if (index > 0) {
                refs[index - 1].current.focus()
            }
        }
    }
    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text');
        console.log("paste Data", data)
        if (!Number(data) || data.length !== inputs.length) return;
        const pasteData = data.split('');
        setInputs(pasteData);
        refs[inputs.length - 1].current.focus()
    }

    const handleSubmit = () => {
        const missed = inputs.map((item, i) => {
            if (item === '') {
                return i
            }
        }).filter((item) => (item || item === 0))
        setMissing(missed);
    }

    useEffect(() => {
        refs[0].current.focus()

    }, [])
    return (
        <div className='app'>
            <h1>Two Factor Code Input</h1>
            <div className='container'>
                {
                    emptArr.map((item, i) => (
                        <input
                            value={inputs[i]}
                            key={i}
                            ref={refs[i]}
                            type='text'
                            maxLength="1"
                            onChange={(e) => handleInputChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            onPaste={handlePaste}
                            className={missing.includes(i) ? 'error' : ''}
                        />
                    ))
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default TwoFactorCodeInput