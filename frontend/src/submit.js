// submit.js


export const SubmitButton = ({nodes,edges}) => {
    
    const sendRequest=async ()=>{
        const payload={nodes,edges};
        const res=await fetch("http://localhost:8000/pipelines/parse",{
            method:"POST",
            headers:{ "Content-Type":"application/json" },
            body:JSON.stringify(payload)
        })

        const data=await res.json()

        console.log("res",data)

        alert(JSON.stringify(data,null,2))
        
        return data;

        
    }

    
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={sendRequest} type="submit" style={{backgroundColor:"blue",cursor:"pointer",padding:"20px",fontSize:"20px",borderRadius:"10%",border:"none",color:"#FFFFFF"}}>Submit</button>
        </div>
    );
}
