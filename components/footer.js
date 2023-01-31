import {TbBrandNextjs} from 'react-icons/tb'
import {BiHeadphone} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'


export default function Footer(){
    return (
        <>
        <div className="flex flex-row justify-center items-center mt-10 text-xl">
            <div className='ml-3'>Made using</div>
            <TbBrandNextjs className='ml-3' style={{fontSize:'50px'}} />
            <div className='ml-3'>,</div>
            <SiTailwindcss className='ml-3' style={{fontSize:'50px'}} />
            <div className='ml-3'>&</div>
            <BiHeadphone className='ml-3' style={{fontSize:'50px'}} />


        </div>
        
        </>
    )
}