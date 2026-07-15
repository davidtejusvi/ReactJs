import React, { useState } from 'react'
import StepProgressBar from './index.js';

const StepProgressBarTest = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
    return (
        <div className='step-progress-bar-container'>
            <StepProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
    )
}

export default StepProgressBarTest