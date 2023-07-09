import usecolormode from "@/hooks/usecolormode"
import Link from "next/link"
import {MdOutlineLightMode} from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useMemo } from "react"


export default function Navbar(){
  const [colormode,setcolormode]= usecolormode()
  const pathname= usePathname();
  const routes=useMemo(()=>[
    {
      active:pathname!=='/project',//for home
    },
    {
      active:pathname==='/project',//for project
    }
  ],[pathname])
  return(
    <>


    <div className="flex justify-evenly font-Ubuntu">
    <div className="flex flex-row h-14 md:w-2/3 w-full rounded-b-3xl justify-evenly items-center shadow-sm dark:bg-slate-200  bg-gray-800 shadow-cyan-00 dark:shadow-gray-700">
      <div className={` font-semibold  transition ease-in-out hover:-translate-y-1 md:text-2xl ${routes[0].active?'text-cyan-200 dark:text-cyan-600':'text-cyan-500'}  dark:text-gray-700`}><Link href='/' >Home</Link></div>
      {/* <div className="font-semibold transition ease-in-out hover:-translate-y-1 md:text-2xl text-cyan-500 dark:text-gray-700"><Link href='#skills'>Skills</Link></div> */}
      <div className={` font-semibold  transition ease-in-out hover:-translate-y-1 md:text-2xl ${routes[1].active?'text-cyan-200 dark:text-cyan-600':'text-cyan-500'}  dark:text-gray-700`}><Link href='/project' >Work/Project</Link></div>
      
    </div> 
    
    </div>
    <div className="flex justify-center">
    <div className="mt-10"><MdOutlineLightMode className="animate-pulse cursor-pointer text-white dark:text-slate-900 transition ease-in-out hover:-translate-y-1" style={{fontSize:'30px'}}  onClick={()=>setcolormode(colormode==="light"?"dark":"light")}  /></div>
    </div>
    </>
  )
}