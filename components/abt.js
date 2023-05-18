import meimg from '../images/me.png'

import Image from 'next/image'

export default function About(){
    return(
    <>
        <div className="flex flex-col md:mt-48 mt-12 font-Ubuntu">
            <div className="text-center font-medium text-4xl text-yellow-300 dark:text-cyan-500 font-Ubuntu" >
                About Me
            </div>
            <div className="flex md:flex-row flex-col flex-wrap-reverse p-4  bg-cyan-800  justify-center items-center mt-6">
                <div className="text-yellow-400 md:w-1/3 p-2 text-center md:text-2xl text-lg font-medium ">
                    Hello! I'm Subramaniyan , A web developer who is interested in making attractive webpages and building fullstack appplications. Apart from this i am also into making mobile applications and trying out ML.  
                </div>
                <div>
                    <Image src={meimg} className='w-96' />
                </div>

            </div>
        </div>
    </>
    )
}