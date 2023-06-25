// import img from '../images/coder.jpg'
import Image from 'next/image'
import pfimg from "../images/code.png"
import Link from 'next/link'
import React from 'react';
import Typed from 'typed.js';




export default function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    var typed = new Typed(el.current, {
      strings: ['CSE Undergrad', 'Web developer'],
      typeSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="transition-all  flex flex-col-reverse md:items-center justify-start items-start md:justify-center md:flex-row md:mt-10  py-2 ml-1 font-Ubuntu">
        <div className=" rounded-3xl leading-snug font-bold text-cyan-400 dark:text-gray-700 text-5xl md:text-7xl p-5 md:h-80 md:w-1/3 md:ml-20 md:mr-20 md:leading-snug">Hey its me<br></br><span className='text-yellow-500 dark:text-gray-700'>Subro....</span> <br></br><p className='text-cyan-700  md:text-4xl text-xl mt-3'><span ref={el} /> </p>

          {/* <p className='text-cyan-700  md:text-4xl text-xl mt-3'> CSE Undergrad</p> */}

          <div className='flex flex-row items-center'>
            <Link href='/project'><button className='md:text-2xl text-lg ml-2 mt-2 transition ease-in-out hover:-translate-y-1  dark:hover:bg-red-400 text-white hover:bg-yellow-400 bg-yellow-500 dark:bg-red-500 p-2 px-4 rounded-md'>My Projects</button></Link>
            <Link href='#skills'><button className='md:text-2xl text-lg ml-2 mt-2 transition ease-in-out hover:-translate-y-1  dark:hover:bg-red-400 text-white hover:bg-red-400 bg-red-500 dark:bg-red-500 p-2 px-4 rounded-md'>Skills</button></Link>
          </div>

        </div>
        <div className="p-5 md:w-1/3 md:ml-20 md:mr-20 md:h-80 flex justify-start items-center">
          <Image className='' src={pfimg} style={{ width: '560px' }} />



        </div>


      </div>
    </>
  )
}