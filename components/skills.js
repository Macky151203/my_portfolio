import {ImHtmlFive} from 'react-icons/im'

import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'

import {SiFlutter} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'



export default function Skills(){
    return (
        <>
        <div className='flex flex-col justify-center items-center'>
        <div className='text-center mt-24 text-4xl font-medium text-yellow-300 dark:text-cyan-500'>Skills</div>
        <div className='flex justify-center items-center mt-16 w-2/3'>
            <div className="flex md:flex-row md:gap-24 gap-2 flex-wrap justify-center">
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><ImHtmlFive style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>HTML</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiCss3 style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>CSS</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiJavascript style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>JavaScript</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiTailwindcss style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>TailwindCSS</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiReact style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>Reactjs</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><TbBrandNextjs style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>Nextjs</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiPython style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>Python</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiFlutter style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>Flutter</div></div>
                <div className='cursor-pointer transition ease-in-out hover:-translate-y-1 p-4 rounded-lg bg-gray-800 shadow-2xl flex flex-col justify-center items-center'><SiScikitlearn style={{fontSize:'70px'}} className='text-orange-400' /><div className='mt-2 text-yellow-300'>Scikit learn</div></div>
                
            </div>
        </div>
        </div>
        </>
    )
}