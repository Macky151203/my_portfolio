import img from '../images/coder.jpg'
import Image from 'next/image'
import pfimg from "../images/pfimg.png"


export default function Hero(){
    return (
        <>
        <div className="transition-all  flex flex-col-reverse md:flex-row md:justify-center mt-0 py-10 ml-1 md:ml-8 md:ml-24 font-mono">
        <div className=" rounded-3xl font-bold text-cyan-400 dark:text-gray-700 text-4xl md:text-7xl p-5 md:h-80 md:w-1/2 md:ml-20 md:mr-20">Hey its me<br></br><span className=''>Subro....</span> <br></br>(Subramaniyan)<p className='text-cyan-700 md:text-5xl text-3xl mt-3'>/Full Stack Developer/</p></div>
        <div className="p-5 ml-4 md:w-1/2 md:ml-20 md:mr-20 md:h-80">
            <Image className='' src={pfimg} style={{width:'300px',borderRadius:'50%'}} />
            
            
        </div>

        </div>
        </>
    )
}