import Navbar from "@/components/navbar"
import trichy from '../../images/trichy.jpg'
import vapi from '../../images/vapi.jpg'
import sastra from '../../images/sastramc.jpg'
import Image from "next/image"
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSolidity} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {TbLetterC} from 'react-icons/tb'
import {SiFlutter} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'
import {BsArrowUpCircle} from 'react-icons/bs'
import {RiStackOverflowLine} from 'react-icons/ri'
import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout"



export default function About(){

    const[val,setval]=useState(1);
    

    return(
        <>
        <Layout>
        <div id="tech" className="bg-stone-800 dark:bg-gray-100 pb-10 transition-colors duration-500">
        <Navbar />
        

        

        <div className="flex flex-col justify-center items-center font-mono">
            
                <div className="dark:bg-gray-300  flex md:flex-row flex-col w-2/3  m-10 mt-24 rounded-3xl dark:shadow-md  dark:shadow-gray-500 bg-gray-800">
                    <Image className="md:rounded-l-3xl rounded-xl w-auto" src={trichy}  />
                    <div className="md:ml-10 ml-2 mb-2 text-2xl font-semibold dark:text-slate-700 text-cyan-700 md:mt-2 mt-6 text-left">I studied in Trichy,Tamilnadu for the first 10 yrs of my life.</div>
                </div>
                <div className="dark:bg-gray-300 flex md:flex-row flex-col w-2/3  m-10  rounded-3xl  md:mt-10 dark:shadow-md dark:shadow-gray-500  bg-gray-800">
                <Image className=" md:rounded-l-3xl rounded-xl" src={vapi}  />
                    <div className="md:ml-10 ml-2 mb-2 text-2xl font-semibold   dark:text-slate-700 text-cyan-700 md:mt-2 mt-6 text-left">I spent the next 9 yrs in Vapi,Gujarat. Studied in St.Xaviers till 10th and studied in Gnyan Dham High School </div>
                </div>
                <div className="dark:bg-gray-300 flex md:flex-row flex-col w-2/3  m-10  rounded-3xl  md:mt-10 dark:shadow-md dark:shadow-gray-500  bg-gray-800">
                <Image className=" md:rounded-l-3xl rounded-xl" src={sastra} />
                    <div className="md:ml-10 ml-2 mb-2 text-2xl font-semibold  dark:text-slate-700 text-cyan-700 md:mt-2 mt-6 text-left">Right now i am an undergrad in SASTRA University, studying in 2nd year</div>
                </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center font-mono">
            <div className="flex flex-row">
            <div className="text-cyan-600 text-4xl">My Tech Stack</div><span>< RiStackOverflowLine className="ml-4 text-yellow-400 dark:text-red-400" style={{fontSize:'40px'}} /></span>
            </div>
            <div className="flex flex-row flex-wrap">
                <div onClick={()=>setval(1)} className="transition ease-in-out duration-500 delay-75 rounded-xl p-2 m-4 bg-slate-400 hover:bg-slate-300 cursor-pointer">All</div>
                <div onClick={()=>setval(2)} className="transition ease-in-out duration-500 delay-75 rounded-xl p-2 m-4 bg-slate-400 hover:bg-slate-300 cursor-pointer">Frontend</div>
                <div onClick={()=>setval(3)} className="transition ease-in-out duration-500 delay-75 rounded-xl p-2 m-4 bg-slate-400 hover:bg-slate-300 cursor-pointer">Backend</div>
                <div onClick={()=>setval(4)} className="transition ease-in-out duration-500 delay-75 rounded-xl p-2 m-4 bg-slate-400 hover:bg-slate-300 cursor-pointer">Mobile</div>
                <div onClick={()=>setval(6)} className="transition ease-in-out duration-500 delay-75 rounded-xl p-2 m-4 bg-slate-400 hover:bg-slate-300 cursor-pointer">ML</div>
            </div>
        </div>
        <div className='flex flex-wrap md:flex-row mt-20 justify-center items-center pb-10 font-mono'>
            {(val===2 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><ImHtmlFive style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Html</div></div>}
            {(val===2 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><SiCss3 style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">CSS</div></div>}
            {(val===2 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.javascript.com"><SiJavascript style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Javascipt</div></div>}
            {(val===2 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://tailwindcss.com"><SiTailwindcss style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Tailwind</div></div>}
            {(val===2 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://reactjs.org"><SiReact style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">React</div></div>}
            {(val===3 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://nextjs.org"><TbBrandNextjs style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Nextjs</div></div>}
            {(val===3 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.mongodb.com"><SiMongodb style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Mongodb</div></div>}
            
            {(val===5 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.java.com/en/"><SiJava style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Java</div></div>}
            {(val===5 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.programiz.com/cpp-programming"><SiCplusplus style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">C++</div></div>}
            {(val===5 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.w3schools.com/c/c_intro.php"><TbLetterC style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">C</div></div>}
            {(val===4 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://flutter.dev"><SiFlutter style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Flutter</div></div>}
            {(val===6 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://www.python.org"><SiPython style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Python</div></div>}
            {(val===6 || val===1) && <div className='flex flex-col mx-4 transition delay-75  duration-200 ease-in-out hover:-translate-y-1 m-5' ><a href="https://scikit-learn.org/stable/"><SiScikitlearn className="text-cyan-500" style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">SciKit</div></div>}
        
        </div>
 

        <div className="flex justify-center">
        <Link href="#tech" ><BsArrowUpCircle className="animate-bounce" style={{fontSize:'40px'}} /></Link>
        </div>
        </div>
        </Layout>
        
        </>
    )
}
