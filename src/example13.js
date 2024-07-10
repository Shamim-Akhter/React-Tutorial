import {useState} from 'react'


export default function Test(){
const [answer,setAnswer]=useState('')
const [status,setStatus]=useState('typing')
const [error,setError]=useState(null)

if(status==='success')
 return <h1>Congartulation, your answer is correct</h1>
function handleTextAreaChange(e){
    setAnswer(e.target.value)
}
async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting')
    try{
        await submitAnswer(answer)
        setStatus('success')
    }
    catch(err){
        setStatus('typing')
        setError(err)
    }
}

return (
 <>
   <h1>Quiz for knowledge check</h1>
   <p>Which city is called pink city ?</p>
   <form onSubmit={handleSubmit}>
   <textarea value={answer} onChange={handleTextAreaChange} disabled={status==='submitting'} />
   <br />
   <button  disabled={answer.length===0 || status==='submitting'}>
    Submit
   </button>
   {
     error !== null && <p className="Error">{error.message}</p> 
   }

   </form>
 </>
    );
}

function submitAnswer(answer){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let shouldError=answer.toLowerCase() !== 'jaipur'
            if(shouldError){
               reject(new Error('Good guess but your answer is not correct'))
            }
            else{
                resolve();
            }
          },1500);
    }
        );
}