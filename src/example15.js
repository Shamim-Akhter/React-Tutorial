import {useState} from 'react'

function Panel({title,children,isActive,onShow}){
    
    return (
        <section className="panel">
          <h2>{title}</h2>
          {
            isActive ? (<p>{children}</p>): (<button onClick={onShow}>Show</button>)
          }
        </section>
    );
}
 export default function Parent(){
    const [index,setIndex]=useState(0)
    return (
        <>
         <h1>Delhi, India</h1>
         <Panel title="About" isActive={index===0} onShow={()=>setIndex(0)}>Delhi is the capital of India. Arvind Kejriwal is the chief minister of delhi. It's police control comes under central goverment</Panel>
         <Panel title="History" isActive={index===1} onShow={()=>setIndex(1)}>Delhi is good to visit during winter. There are so many tourist places like cannaught place, rajiv chowk.</Panel>
        </>
    );
 }