import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link'
export default function Contact(){
    return(
        <>
        <div className='flex flex-row mt-20 justify-center items-center pb-10'>
            <div className='mx-4 transition ease-in-out hover:-translate-y-1' ><a href='/'><AiFillTwitterCircle style={{fontSize:'50px'}} /></a></div>
            <div className='mx-4 transition ease-in-out hover:-translate-y-1' ><a href='https://github.com/Macky151203'><BsGithub style={{fontSize:'50px'}}  /></a></div>
            <div className='mx-4 transition ease-in-out hover:-translate-y-1' ><a href='https://www.linkedin.com/feed/'><BsLinkedin style={{fontSize:'50px'}}  /></a></div>
            <div></div>
        </div>
        </>
    )
}
