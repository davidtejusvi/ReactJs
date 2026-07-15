import React, { useState, useRef, useEffect } from 'react'

const UseRef = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      <h1>UseRef</h1>
      <h1>Timer : {count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>stop Interval</button>
    </div>
  )
}

export default UseRef