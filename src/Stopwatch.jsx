import React, {useState, useEffect, useRef} from 'react';

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() =>{
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 11);
        }

        return() => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    function start(){   
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = (elapsedTime / (1000 * 60 * 60));
        let minutes = (elapsedTime / (1000 * 60) % 60);
        let seconds =(elapsedTime / (1000) %60)
        let milliseconds = ((elapsedTime % 1000) /10 );

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds= String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return ( 
    <div className='stopwatch'>
        <div className='display'>{formatTime()}</div>
        <div className='controls'>
             <button onClick={start} className='start-button'>start</button>
             <button onClick={reset} className='reset-button'>reset</button>
             <button onClick={stop} className='stop-button'>stop</button>
        </div>
    </div> );
}

export default Stopwatch;