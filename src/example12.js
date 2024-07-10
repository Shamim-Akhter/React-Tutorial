import {useState} from 'react'

const initialList=[
    {id:0, name:'Mohan'},
    {id:1, name:'Akbar'},
    {id:2, name:'Mohit'},
    {id:3, name:'Karan'},
    {id:4, name:'Gautam'},
]
export default function Test(){
   const [list,setList]=useState(initialList);
   function handleClick(){
     const newList=[...list]
     newList.reverse();
     setList(newList)
   }
   return (
    <>
     <button onClick={handleClick}>
       Reverse
     </button>
     <ul>
        {list.map((member)=>{
          return  <li key={member.id}>{member.name}</li>
        })}
     </ul>
    </>
   )
}