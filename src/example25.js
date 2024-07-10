
import {useState} from 'react'



// const useState = (value)=>{
//     const setValue = (newValue)=>{
//           value = newValue;
//           console.log(value);
//         //manual Render the App component
//     }
    
//     const state = [value,setValue];
//      console.log(state);
//     return state;
// }

 
export default function App(){
    const [count,setCount] = useState(5);
    const [message,setMessage] = useState("");
    
    function increment(){
        if(count<10){
            setCount(count+1);
            setMessage("null")
        }
        else{
            setMessage("You cannot go beyond 10");
        }
        
    }

    function decrement(){
        if(count>0){
            setCount(count-1);
            setMessage("null")
        }
        else{
            setMessage("You cannot go beyond 0");
        }
    }
    
    return (
        <>
         <button onClick={increment}>+1</button>
         <p>{count}</p>
         <button onClick={decrement}>-1</button>
         <p>{message}</p>
        </>
    );
}