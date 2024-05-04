import { useState } from "react";
import Image from "next/image";
import cimg from '../images/contactimg.png'


export default function Contact() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [comment, setcomment] = useState('')
    const handlesubmit = async () => {
        const response = fetch('api/add', {
            method: 'POST',
            body: JSON.stringify({ name, email, comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        // const abc= await response.json();
        // console.log(abc);
    }
    return (<>
        <div className="mt-24 pb-10 flex flex-col justify-center items-center ">

            <div className="text-yellow-300 text-4xl font-medium dark:text-cyan-500">Contact</div>
            <div className="w-full justify-center flex-wrap-reverse items-center flex md:flex-row flex-col bg-cyan-800 mt-8">
                <div className="md:w-1/3 p-2">
                    <form className="p-2 font-Ubuntu flex flex-col justify-center items-start mt-8 text-yellow-300 text-xl md:text-2xl ">
                        <div className=" mb-6 text-3xl  font-medium">Wanna connect with me?</div>
                        <input className="m-5 text-black text-md p-2 border-none rounded-lg" value={name} placeholder="Enter your name" type="text" required onChange={(e) => setname(e.target.value)} />
                        <input className="m-5 text-black p-2 text-md  border-none rounded-lg" value={email} placeholder="Enter you email" type="email" required onChange={(e) => setemail(e.target.value)} />
                        <input className="m-5 text-black p-2 border-none   rounded-lg" value={comment} placeholder="Type what you think" type="text" required onChange={(e) => setcomment(e.target.value)} />
                        <div className="flex justify-center bg-red-500 w-32 text-white mt-4 p-2  rounded-xl transition ease-in-out hover:-translate-y-1"><button type="submit" onClick={handlesubmit}>Submit!</button></div>
                    </form>
                </div>
                <div className="md:w-1/3"><Image src={cimg} style={{ width: '480px' }} /></div>

            </div>


            {/* <form className="p-2 flex flex-col justify-center items-center mt-8 text-cyan-600 dark:text-gray-700 text-2xl dark:bg-gray-300 bg-gray-700">
            <div>Name- <input className="m-5 border-2 border-gray-700 rounded-md" value={name} type="text" required onChange={(e)=>setname(e.target.value)} /></div>
            <div>Email- <input className="m-5 border-2 border-gray-700 rounded-md" value={email} type="email" required onChange={(e)=>setemail(e.target.value)} /></div>
            <div>Comment- <input className="m-5 border-2 border-gray-700 rounded-md" value={comment} type="text" required onChange={(e)=>setcomment(e.target.value)} /></div>
            <div className="flex justify-center bg-red-500 w-24 text-white mt-4 p-2  rounded-2xl transition ease-in-out hover:-translate-y-1"><button type="submit" onClick={handlesubmit}>Submit!</button></div>
        </form> */}

        </div>
    </>)
}