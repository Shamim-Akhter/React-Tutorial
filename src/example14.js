import {useState} from 'react'

export default function Test(){
const [text,setText]=useState('')
const [status,setStatus]=useState('typing')

const isSending=status==='sending'
const isSent=status==='sent'

async function handleSubmit(e){
    e.preventDefault();
    setStatus('sending')
    await sendMessage(text)
    setStatus('sent')

}

if(isSent)
return <h1>Thanks for the feedback</h1>
return (
    <>
      <p>How can we improve our service to give you better hospitality ?</p>
      <form onSubmit={handleSubmit}>
         <textarea 
          value={text} 
          disabled={isSending}
          onChange={e=>setText(e.target.value)}
         />
         <br />
         <button type='submit' disable={isSending}>
           Send
         </button>
         {isSending && <p>Sending...</p>}
      </form>
    </>
);
}

function sendMessage(text){
    return new Promise(resolve=>
        setTimeout(resolve,2000)
    )
}