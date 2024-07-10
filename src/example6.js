function Button({onClick,children}){
    return (
        <button onClick={onClick}>{children}</button>
    )
}
function PlayButton({movie}){
       function handleClick(){
        alert(`Playing ${movie}`);
       }
       return (
        <Button onClick={handleClick}>Play "{movie}"</Button>
       )
}
function UploadButton(){
    return (
        <Button onClick={()=>{alert('Uploading image')}}>Upload Image</Button>
    )
}
export default function Test(){
   return (
    <div>
        <PlayButton movie="Sultan" />
        <UploadButton />
    </div>
   );
}