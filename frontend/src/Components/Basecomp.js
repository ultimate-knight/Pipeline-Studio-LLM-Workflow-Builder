import { Handle} from 'reactflow';
import { useState } from 'react';
import { X } from 'lucide-react';






function Basecomp({handleId,title,value,selectType,onSelectType,HandleType, handlePosition}) {
  //useStates//
  const [state,setState]=useState(true);
  const [str,setStr]=useState(value);
  const [hover,setHover]=useState(false);






  
//functions//
  const handleChange=(e)=>{
      let verter=e.target.value;
      setStr(verter);

  }

  


  

//jsx//
  return (
    state && (
    <div style={{width: "14rem",position:"relative",overflow:"visible",boxShadow:"1px 1px 10px 3px #3182ce", minHeight:"8rem",padding:"50px",color:"#FFFFFF",backgroundColor:"#1A3F7A", border: '1px solid black',borderRadius:"5%", display:"flex", flexDirection:"column",gap:"1rem",alignItems:"center",justifyContent:"center"}} className='text'>
      <span onClick={()=>setState(!state)} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  style={{position:"absolute",borderRadius:"50%",textAlign:"center", padding:"2px 5px",color:"#FFFFFF",right:0,top:0,marginTop:"3px",marginRight:"5px",fontWeight:"bold",backgroundColor:hover?"#EF4444":""}}><X/></span>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:""}}>
        <span style={{fontFamily:"inherit",fontWeight:"bold",textDecoration:"underline",fontSize:"1.2rem"}}>{title}</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <label style={{display:"flex",flexDirection:"row",gap:"0.3rem",fontSize:"1rem"}}>
          Name:
          <input
            type="text" 
            value={str} 
            style={{padding:"1px"}}
            onChange={handleChange}
          />
        </label>

        <label style={{display:"flex",flexDirection:"row",gap:"0.8rem",fontSize:"1rem"}}>
          Type:
          <select value={selectType}  style={{width:"9rem"}} onChange={onSelectType}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>

        <Handle
        type={HandleType}
        position={handlePosition}
        id={handleId}
      />  


    </div>
    )
  );
}

export default Basecomp



