import React from 'react'

const ProgressBar = ({ progress }) => {
    return (
        <div>
            <h1>ProgressBar</h1>
            <div className='outer'>
                <div className='inner' style={{ width: `${progress}%` }}>{progress}%</div>
            </div>
        </div>
    )
}

export default ProgressBar