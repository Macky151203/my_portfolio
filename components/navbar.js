import Link from "next/link"

export default function Navbar(){
  return(
    <>


    <div className="flex justify-evenly font-mono">
    <div className="flex flex-row h-14 md:w-1/2 w-full rounded-b-3xl justify-evenly items-center shadow-2xl shadow-cyan-500">
      <div className="transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300"><Link href='/'>Home</Link></div>
      <div className="transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300"><Link href='/about'>About</Link></div>
      <div className="transition ease-in-out hover:-translate-y-1 text-xl text-cyan-300"><Link href='/project'>My Projects</Link></div>
    </div>  
    </div>
    </>
  )
}