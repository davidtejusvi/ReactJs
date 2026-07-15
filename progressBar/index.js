import React from 'react';


const StepProgressBar = ({ steps, activeStep, setActiveStep }) => {
    return (
        <div>
            <div className='steps'>
                {
                    steps && steps.length > 0 ? steps.map((stepItem, index) => <div>
                        {stepItem}
                    </div>) : null
                }
            </div>
            <div className='step-buttons-wrapper'>
                <button>Prev Step</button>
                <button>Next Step</button>
            </div>
        </div>
    )
}

export default StepProgressBar