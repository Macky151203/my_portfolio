import img from '../images/coder.jpg'
import Image from 'next/image'

export default function Hero(){
    return (
        <>
        <div className="flex flex-col-reverse md:flex-row md:justify-center mt-20 py-10 ml-1 md:ml-8 md:ml-24 font-mono">
        <div className=" rounded-3xl font-bold text-cyan-400 text-4xl md:text-7xl p-5 md:h-80 md:w-1/2 md:ml-20 md:mr-20">Hey its me Subro....<br></br>(Subramaniyan)<p className='text-cyan-700 md:text-5xl text-3xl mt-3'>/Full Stack Developer/</p></div>
        <div className="p-5 md:w-1/2 md:ml-20 md:mr-20 md:h-80">
            <Image src={img} style={{width:'300px',borderRadius:'50%'}} />
        </div>

        </div>
        </>
    )
}