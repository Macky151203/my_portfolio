import { useState } from "react"


export default function Connect(){
    const [name,setname]= useState('')
    const [email,setemail]=useState('')
    const [comment,setcomment]=useState('')
    const handlesubmit= async()=>{
        const response= fetch('api/add',{
            method:'POST',
            body:JSON.stringify({name,email,comment}),
            headers:{
                'Content-Type':'application/json',
            },
        })
        // const abc= await response.json();
        // console.log(abc);
    }
    return(<>
        <div className="mt-15 pb-10 flex flex-col font-mono">
       
        <div className="p-2 flex justify-center items-center text-3xl text-cyan-700 mt-10">Interested in sharing your ideas or wanna connect with me? Here it is...</div>
        <div className="p-2 text-3xl text-cyan-700 text-left md:text-center mt-2">You can also share your reviews</div>
        <div className="p-2 flex flex-col justify-center items-center mt-8 text-cyan-600 dark:text-gray-700 text-2xl dark:bg-red-300 bg-gray-700">
            <div>Name- <input className="m-5 border-2 border-gray-700 rounded-md" value={name} onChange={(e)=>setname(e.target.value)} /></div>
            <div>Email- <input className="m-5 border-2 border-gray-700 rounded-md" value={email} onChange={(e)=>setemail(e.target.value)} /></div>
            <div>Comment- <input className="m-5 border-2 border-gray-700 rounded-md" value={comment} onChange={(e)=>setcomment(e.target.value)} /></div>
            <div className="flex justify-center bg-red-500 w-24 text-white mt-4 p-2  rounded-2xl transition ease-in-out hover:-translate-y-1"><button type="submit" onClick={handlesubmit}>Submit!</button></div>
        </div>
        
        </div>
    </>)
}