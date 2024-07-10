import {useState} from 'react'
import {foods,filterItems} from './data1'

export default function Test(){
    const [query,setQuery]=useState('');
    const results=filterItems(foods,query);
    function handleChange(e){
        setQuery(e.target.value)
    }
    return (
        <>
        <SearchBar query={query} onChange={handleChange} />
        <hr />
        <List items={results} />
        </>
    );
}
function SearchBar({query,onChange}){
    return (
        <label>
            Search:{' '}
            <input value={query} onChange={onChange} />
        </label>
    );
}

function List({items}){
    return (
    <table>
        <tbody>
            {  items.map(item=>
                <tr key={item.id}>
                    <td>{item.name}:</td>
                    <td>{item.description}:</td>
                </tr>)
            }
        </tbody>
    </table>
    );
}