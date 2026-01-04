// submit.js

export const SubmitButton = ({nodes,edges}) => {

    console.log("apiurl",process.env.REACT_APP_API_URL)
    console.log("All process.env:", process.env)
console.log("NODE_ENV:", process.env.NODE_ENV)
    console.log("All env vars:", Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')))
    if (!process.env.REACT_APP_API_URL) {
    console.error("NEXT_PUBLIC_API_URL is missing");
  }
    
    const sendRequest=async ()=>{
        const payload={nodes,edges};
        const res=await fetch(`${process.env.REACT_APP_API_URL}/pipelines/parse`,{
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
