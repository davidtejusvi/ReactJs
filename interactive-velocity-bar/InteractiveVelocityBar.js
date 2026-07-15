import React from 'react';
import Chart from './Chart';
import CHART_DATA from './data';


const InteractiveVelocityBar = () => {
    return (
        <main>
            <Chart data={CHART_DATA} />
        </main>
    )
}

export default InteractiveVelocityBar;