import {useState} from 'react';
export default function Test(){
    const [to,setTo]=useState('Alice');
    const [message,setMessage]=useState('Hello')
    function handleSubmit(e){
            e.preventDefault();
            setTimeout(()=>{
                alert(`${message} sent to ${to}`)
            },5000)
    }
    return (
        <form onSubmit={handleSubmit}>
            <lable>
                To:{' '}
                <select value={to} onChange={e=>setTo(e.target.value)}>
                    <option value='Alice'>Alice</option>
                    <option value='Bob'>Bob</option>
                </select>
            </lable>
            <br />
            <textarea value={message} onChange={e=>setMessage(e.target.value)}/>
            <br/>
            <button type="submit">Send</button>
        </form>
    );
}