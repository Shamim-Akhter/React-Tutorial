function Items({name,isChecked}){
    return (
        <li>
            {name} {isChecked && '<>'}
        </li>
    )
}

export default function Example2(){
    return (
        <>
        <h1>Some work to do</h1>
        <ul>
            <Items name="Eating" isChecked={true} />
            <Items name="Sleeping" isChecked={false} />
            <Items name="Bathing" isChecked={true} />
        </ul>
        </>
    )
}