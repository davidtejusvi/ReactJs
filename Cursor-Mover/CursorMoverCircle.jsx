import React, { useEffect, useRef } from 'react'

const CursorMoverCircle = () => {
    const rootRef = useRef();

    const handleMouseOver = (e) => {

    }

    useEffect(() => {
        rootRef.current.addEventListener('mouseOver', handleMouseOver);

        return () => {
            rootRef.current.removeEventListener('mouseOver', handleMouseOver);
        }
    }, [])
    return (
        <div ref={rootRef}>
            <div className={{height:"100vh"}}>

            </div>
        </div>
    )
}

export default CursorMoverCircle