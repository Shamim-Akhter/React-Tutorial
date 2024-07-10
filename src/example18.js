import {useRef} from 'react'

export default function App(){
    const ref= useRef(null)

    function handleClick(){
        ref.current.focus();
    }

    return (
        <>
           <input ref={ref}/>
           <button onClick={handleClick}>Click</button>
        </>
    )
}