import React from 'react';
import Shape from './Shape';


const ShapeBaseUI = () => {
    const BOX_DATA = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
    ];
    return (
        <Shape data={BOX_DATA} />
    )
}

export default ShapeBaseUI