import { useRef, useState } from "react";

const Timer = props => {
    const [counter, setcounter] = useState(0);
    const [ispause, setispause ] = useState(false)
const counterRef = useRef()
    const startCounter = ()=>{
        setispause(false)
   counterRef.current = setInterval(() => {
            setcounter((prev)=> prev + 1)
        }, 1000);
    }
    const pauseCounter =()=>{
        clearInterval(counterRef.current)
        setispause(true)
    }
    const stopCounter =()=>{
        setcounter(0)
        setispause(false)
        clearInterval(counterRef.current)
    }
  return (
    <div className="timer">
          <h5>{counter}</h5>
          <button onClick={startCounter} disabled={counter > 0 && !ispause}>Start</button>
        <button onClick={pauseCounter}>pause</button>
        <button onClick={stopCounter}>Stop</button>
    </div>

  )
}

export default Timer