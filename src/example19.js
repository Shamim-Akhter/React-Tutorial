import {useState,useRef,useEffect} from 'react'

export default function App(){
const [isPlaying,setIsPlaying] =useState(false)

return (
    <>
     <button onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying?'Pause':'Play'}
     </button>
     <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </>
);
}

function VideoPlayer({isPlaying,src}){
    const ref=useRef(null)
   useEffect(()=>{
    if(isPlaying){
        ref.current.play()
    }
    else{
        ref.current.pause()
    }
   },[isPlaying]) 

    return <video ref={ref} src={src} loop playsInline/>
}