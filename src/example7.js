export default function Test(){
    return (
        <div onClick={()=>{alert('Parent is clicked')}}>
              <Button onClick={()=>alert('playing')}>Play Movie</Button>
              <Button onClick={()=>alert('uploading')}>Upload Movie</Button>
        </div>
    );
}
function Button({onClick,children}){
    return (
        <button onClick={(e)=>{e.stopPropagation();onClick()}}>{children}</button>
    );
}