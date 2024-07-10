import {useState} from 'react'
import { sculptureList } from './data'

export default function App(){
    const [index,setIndex]=useState(0);
    const [showMore,setShowMore]=useState(false);
    const hasNext=index<sculptureList.length-1;

    function setIndexHandler(){
        if(hasNext)
        setIndex(index+1)
        else
        setIndex(0)
    }

    function setShowMoreHandler(){
        setShowMore(!showMore)
    }
    let sculpture=sculptureList[index]
    return (
        <>
        <button onClick={setIndexHandler}>Next</button>
        <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
        <h3>({index+1} of {sculptureList.length})</h3>
        <button onClick={setShowMoreHandler}>{showMore?'Hide':'Show'} details</button>
        {showMore && <p>{sculpture.description}</p>}
        <img 
          src={sculpture.url}
          alt={sculpture.alt}
        />
        </>
    );
}