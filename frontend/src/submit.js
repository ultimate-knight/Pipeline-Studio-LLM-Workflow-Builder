// submit.js

"use client"
export const SubmitButton = ({nodes,edges}) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is missing");
  }
    
    const sendRequest=async ()=>{
        const payload={nodes,edges};
        const res=await fetch(`${apiUrl}/pipelines/parse`,{
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
