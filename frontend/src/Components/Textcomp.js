import { Handle, Position } from 'reactflow';
import { useState,useRef,useEffect } from 'react';
import { X } from 'lucide-react';
import { useUpdateNodeInternals } from 'reactflow';

function Textcomp({id,title,heading,value,type,handlePosition,handleId}) {
  //useStates//
    const [state,setState]=useState(true);
    const [str,setStr]=useState(value);
    const [hover,setHover]=useState(false);
    const [edge,setEdge]=useState([]);




    //Assignments
      const textAraeRef=useRef(null);

      const updatedNodeInternals=useUpdateNodeInternals();


      //Functions//
      function parseCharacter(text){
        let regex=/\{\{([A-Za-z_$][A-Za-z0-9_$]*)\}\}/g;
        let terter=[];
        let matching;

        while((matching=regex.exec(text))!==null){
          terter.push(matching[1])
        }
        return terter;
      }

      function handleText(e){
        const verter=e.target.value;
        setStr(verter);
        const parse=parseCharacter(verter);
        setEdge(parse);

        if (id) updatedNodeInternals(id);
      }


    
      const textAreaSize=()=>{
        const textArea=textAraeRef.current;
    
        if(textArea){
          textArea.style.height="inherit";
          textArea.style.height=`${textArea.scrollHeight}px`
        }
    
      }



      //useEffect//
      useEffect(()=>{
        textAreaSize()
      },[str])
    

      
    
    
  //jsx//
  return (
    state && (
        
    <div style={{display:"flex",boxShadow:"1px 1px 10px 3px #3182ce",flexDirection:"column",gap:"1rem",width: "14rem", minHeight: "8rem",padding:"50px",borderRadius:"5%", border: '1px solid black',backgroundColor:"#1A3F7A",color:"#FFFFFF"}}>
        <span onClick={()=>setState(!state)} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:"absolute",color:"#FFFFFF",right:0,top:0,marginTop:"4px",borderRadius:"50%",marginRight:"7px",padding:"2px 5px",fontWeight:"bold",backgroundColor:hover?"#EF4444":""}}><X/></span>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"15px"}}>
        <span style={{fontWeight:"bold",textDecoration:"underline"}}>{title}</span>
      </div>
      <div >
        <label style={{display:"flex",flexDirection:"row",gap:"0.2rem"}}>
          {heading}:
          <textarea
            type="text" 
            value={str} 
            onChange={handleText} 
            style={{padding:"1px",resize: 'none'}}
            ref={textAraeRef}
          />
        </label>
      </div>
      <Handle
        type={type}
        position={handlePosition}
        id={handleId}
        
      />

      
      {edge.map((eert,index)=>(
           <Handle
        type="target"
        position={Position.Left}
        id={eert}
        style={{top:30*index+24}}
      />
      ))
     
}

    </div>
    
    )
)
}

export default Textcomp