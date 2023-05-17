import {TbBrandNextjs} from 'react-icons/tb'
import {BiHeadphone} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


export default function Footer(){
    return (
        <>
        
        <div className='flex md:flex-row flex-col-reverse justify-around mt-2 p-4'>
        <div className="flex flex-row justify-center items-center  text-xl mt-8 md:mt-0">
            <div className='ml-3'>Made using</div>
            <TbBrandNextjs className='ml-3' style={{fontSize:'50px'}} />
            <div className='ml-3'>,</div>
            <SiTailwindcss className='ml-3' style={{fontSize:'50px'}} />
            <div className='ml-3'>&</div>
            <BiHeadphone className='ml-3' style={{fontSize:'50px'}} />


        </div>
        <div className='flex flex-row justify-center items-center text-xl'>
            <a href='/'><AiFillTwitterCircle className=' dark:text-red-400 ml-4 transition ease-in-out hover:-translate-y-1' style={{fontSize:'50px'}} /></a>
           <a href='https://github.com/Macky151203'><BsGithub className='dark:text-green-400 ml-4 transition ease-in-out hover:-translate-y-1' style={{fontSize:'50px'}}  /></a>
            <a href='https://www.linkedin.com/feed/'><BsLinkedin className=' dark:text-blue-400 ml-4 transition ease-in-out hover:-translate-y-1' style={{fontSize:'50px'}}  /></a>
            
        </div>
        </div>
        
        </>
    )
}