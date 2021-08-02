import {React,useState,useRef} from 'react'

export default function Counter() {
    const [currentValue, setCurrentValue] = useState(0)

    const inputIncrementValue = useRef()

    function handleIncrement (){
        const incrementValue = inputIncrementValue.current.value
        if (incrementValue===""){
            setCurrentValue(currentValue+2)
        }else{
            setCurrentValue(currentValue+Number(inputIncrementValue.current.value))
        }
    }


    return (
        <div>
            <h1>The current value is {currentValue}</h1>
            <input ref={inputIncrementValue} type="text" placeholder = "2" />
            <button onClick ={handleIncrement} >Add Amount</button>
        </div>
    )
}
