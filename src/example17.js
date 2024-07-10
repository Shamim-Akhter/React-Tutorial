import {useState} from 'react'
import {persons,filterPersonsByName,heart} from './data2'

export default function Test(){
    const [query,setQuery]=useState('');
    const resultsByName=filterPersonsByName(persons,query);
    function handleChange(e){
        setQuery(e.target.value)
    }
    return (
        <>
        <h1>Instagram Application</h1>
        <hr />
        <SearchBar query={query} onChange={handleChange} />
        <hr />
        <List persons={resultsByName} hearts={heart[0]} />
        </>
    );
}
function SearchBar({query,onChange}){
  return (
      <label>
          Search:{' '}
          <input value={query} placeholder="Search by name" onChange={onChange} />
      </label>
  );
}
function List({persons,hearts}){
    const [initialHeart,setInitialHeart]=useState(hearts);
    function handleHeartChange(){
        const heart_button =   document.getElementById('heartButton');
         console.log(heart_button.getAttribute('alt'));

        if( initialHeart.alt==='whiteHeart'){
            setInitialHeart(heart[1]);
            heart_button.setAttribute('src',heart[1].image);
            heart_button.setAttribute('src',heart[1].image);
        }
        else{
            setInitialHeart(heart[0]);
            heart_button.setAttribute('src',heart[0].image);
            heart_button.setAttribute('src',heart[0].image);
        }
    }
    if(persons.length<1)
    return <h1>No results found</h1>
    return(
      <>
       {
         persons.map(
            (person)=>{
                return (
                    <div key={person.id} style={{display:'inline-block',marginRight:20,}}>
                   <img src={person.image} alt={person.name} height={200} width={200} style={{borderRadius:5,}}/>
                   <div style={{display:'flex', justifyContent: 'space-between',}}>
                   <p>{person.name}</p>
                   <p>{person.city}</p>
                   </div>
                   <div>
                    <button  style={{border:'0px', backgroundColor:'white'}} onClick={handleHeartChange}><img id="heartButton" src={initialHeart.image} alt={initialHeart.name} height={20} width={20} /></button>
                   </div>
                   </div>
                );
            }
         )
       }
      </>
    )
}