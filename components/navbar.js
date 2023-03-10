import usecolormode from "@/hooks/usecolormode"
import Link from "next/link"
import {MdOutlineLightMode} from 'react-icons/md'

export default function Navbar(){
  const [colormode,setcolormode]= usecolormode()
  return(
    <>


    <div className="flex justify-evenly font-mono">
    <div className="flex flex-row h-14 md:w-1/2 w-full rounded-b-3xl justify-evenly items-center shadow-2xl dark:bg-blue-300  bg-gray-800 shadow-cyan-500 dark:shadow-gray-700">
      <div className="font-semibold  transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300 dark:text-gray-700"><Link href='/' >Home</Link></div>
      <div className="font-semibold transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300 dark:text-gray-700"><Link href='/about'>About</Link></div>
      <div className="font-semibold transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300 dark:text-gray-700"><Link href='/project'>My Projects</Link></div>
      
    </div> 
    
    </div>
    <div className="flex justify-center">
    <div className="mt-10"><MdOutlineLightMode className="animate-pulse cursor-pointer text-white dark:text-slate-900 transition ease-in-out hover:-translate-y-1" style={{fontSize:'30px'}}  onClick={()=>setcolormode(colormode==="light"?"dark":"light")}  /></div>
    </div>
    </>
  )
}