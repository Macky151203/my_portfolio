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


export default function About(){
    return(
        <>
        <div className="bg-stone-800 dark:bg-gray-100 pb-10">
        <Navbar />
        <div className="flex flex-col justify-center items-center font-mono">
            
                <div className="flex md:flex-row flex-col w-2/3  m-10 mt-24 rounded-3xl shadow-md">
                    <Image className="md:rounded-l-3xl rounded-xl " src={trichy} style={{width:'228px'}} />
                    <div className="ml-10 text-xl text-cyan-700 md:mt-2 mt-6 text-left">I studied in Trichy,Tamilnadu for the first 10 yrs of my life.</div>
                </div>
                <div className="flex md:flex-row flex-col w-2/3  m-10  rounded-3xl  md:mt-10 shadow-md">
                <Image className=" md:rounded-l-3xl rounded-xl" src={vapi} style={{width:'228px'}} />
                    <div className="ml-10 text-xl text-cyan-700 md:mt-2 mt-6 text-left">I spent the next 9 yrs in Vapi,Gujarat. Studied in St.Xaviers till 10th and studied in Gnyan Dham High School </div>
                </div>
                <div className="flex md:flex-row flex-col w-2/3  m-10  rounded-3xl  md:mt-10 shadow-md">
                <Image className=" md:rounded-l-3xl rounded-xl" src={sastra} style={{width:'228px'}} />
                    <div className="ml-10 text-xl text-cyan-700 md:mt-2 mt-6 text-left">Right now i am an undergrad in SASTRA University, studying in 2nd year</div>
                </div>
        </div>
        
        <div className="mt-16 flex justify-center font-mono">
            <div className="text-cyan-600 text-4xl">Technology that i am familiar with...</div>
        </div>
        <div className='flex flex-wrap md:flex-row mt-20 justify-center items-center pb-10 font-mono'>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><ImHtmlFive style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Html</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiCss3 style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">CSS</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiJavascript style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Javascipt</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiTailwindcss style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Tailwind</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiReact style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">React</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><TbBrandNextjs style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Nextjs</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiSolidity style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Solidity</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiJava style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Java</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiCplusplus style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">C++</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><TbLetterC style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">C</div></div>
            <div className='flex flex-col mx-4 transition ease-in-out hover:-translate-y-1 m-5' ><a href=""><SiFlutter style={{fontSize:'80px'}} /></a><div className="text-center text-xl font-bold text-cyan-700">Flutter</div></div>
        </div>
 


        </div>
        </>
    )
}