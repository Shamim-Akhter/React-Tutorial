import {useState} from 'react'
export default function Test(){
const [person,setPerson]=useState({
    firstName:'Shamim',
    lastName:'Akhter',
    email:'sasklndkls@gmail.com'
})

function handleFirstNameChange(e){
    setPerson({...person,
        firstName:e.target.value  
    })
}
function handleLastNameChange(e){
    setPerson({...person,
       lastName:e.target.value
    })
}
function handleEmailChange(e){
    setPerson({...person,
       email:e.target.value
    })
}


return (
    <>
    <label>
        FirstName: 
        <input value={person.firstName} onChange={handleFirstNameChange}/>
    </label>
     <br/>
    <label>
        LastName: 
        <input value={person.lastName} onChange={handleLastNameChange}/>
    </label>
    <br/>
    <label>
        Email: 
        <input value={person.email} onChange={handleEmailChange}/>
    </label>
    <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        {person.email}
    </p>
    </> 
);
}