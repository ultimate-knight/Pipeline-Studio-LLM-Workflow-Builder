import React from 'react'
import { Handle} from 'reactflow';
import { useState } from 'react';
import { X } from 'lucide-react';

function Llmcomp({HandleType,title,HandleSource,Positionleft,PositionRight,handleSystem,handlePrompt,handleResponse}) {
  //useStates//
    const [state,setState]=useState(true);
    const [hover,setHover]=useState(false)


  return (
    state && (
    <div style={{display:"flex",boxShadow:"1px 1px 10px 3px #3182ce",flexDirection:"column",gap:"1rem",width: "14rem", height: "8rem",padding:"50px",borderRadius:"5%", border: '1px solid black',backgroundColor:"#1A3F7A",color:"#FFFFFF"}}>
        <span onClick={()=>setState(!state)} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:"absolute",borderRadius:"50%",textAlign:"center", padding:"2px 5px",color:"#FFFFFF",right:0,top:0,marginTop:"3px",marginRight:"5px",fontWeight:"bold",backgroundColor:hover?"#EF4444":""}}><X/></span>
      <Handle
        type={HandleType}
        position={Positionleft}
        id={handleSystem}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type={HandleType}
        position={Positionleft}
        id={handlePrompt}
        style={{top: `${200/3}%`}}
      />
      <div>
        <span style={{display:"flex",flexDirection:"row",justifyContent:"center",fontWeight:"bold",textDecoration:"underline"}}>{title}</span>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <span>This is a {title}.</span>
      </div>
      <Handle
        type={HandleSource}
        position={PositionRight}
        id={handleResponse}
      />
    </div>
    )
  )
}

export default Llmcomp