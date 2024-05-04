import Navbar from "@/components/navbar"
import { Suspense, lazy, SuspenseImage } from "react"
import Image from "next/image"

import travelapp from '../../images/travelapp.png'
import ai from '../../images/ai.png'
import mpf from '../../images/mpf.png'
import weather from '../../images/weather.png'
import manage from '../../images/manage.png'
import fend from '../../images/fend.png'
import tm from '../../images/tm.png'
import pexp from '../../images/pexp.png'
import chat from '../../images/chat.png'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsArrowUpCircle } from 'react-icons/bs'
import Link from "next/link"
import Layout2 from "@/components/imageslayout"
import Loading from "@/components/loading"
import { Ubuntu } from "@next/font/google"
import { useMediaQuery } from '@mui/material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';
import { tmpdir } from "os"
// import Card from "@/components/card"
const Card = lazy(() => import('../../components/card.js'))
const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: '400',
})


export default function Project() {
    const matches = useMediaQuery('(min-width:600px)');
    const StyledAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
        color: 'wheat',
    }));
    const Label = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: "wheat",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }));
    const itemData = [
        // {
        //     img: travelapp,
        //     title: 'TravelApp',
        //     desc: 'Travel app frontend made for Daksh Hackathon',
        
        //     // link:''
        // },
        {
            img: fend,
            title: 'Landing page',
            desc: 'A landing page made for club recruitment',
            link: 'https://dcs-rose.vercel.app',
            github:'https://github.com/Macky151203/dcs'
        },
        // {
        //     img: meal,
        //     title: 'Meal App',
        //     desc: 'A meal app made using Flutter',
            
        // },
        {
            img: ai,
            title: 'AiChat',
            desc: 'An AI chat app made using vercel AI SDK',
            link: 'https://temp-pi-two.vercel.app',
            github:'https://github.com/Macky151203/temp'
        },
        {
            img: mpf,
            title: 'Portfolio',
            desc: 'This website made using Nextjs and Tailwindcss',
            github:'https://github.com/Macky151203/mpf'
        },
        {
            img: weather,
            title: 'Weather App',
            desc: 'A Weather app made using React and openweather api',
            link: 'https://react-weatherapp-mduj-9n32w9cdv-macky151203.vercel.app',
            github:'https://github.com/Macky151203/React_weatherapp',
        },
        {
            img: tm,
            title: 'Task Manager',
            desc: 'A Task managing app made using Reactjs',
            link: 'https://internwork-five.vercel.app',
            github:'https://github.com/Macky151203?tab=repositories',
        },
        // {
        //     img: manage,
        //     title: 'Landing page',
        //     desc: 'A landing page made using Tailwindcss'
        // },
        // {
        //     img: pexp,
        //     title: 'Expense manager',
        //     desc: 'An expense manageing app made using Flutter',
        //     github:'https://github.com/Macky151203/Flutter_expense_App/tree/master'
        // },



    ];

    return (
        <>
            <Layout2 >
                <div id="tech" className={`${ubuntu.className} bg-stone-800 dark:bg-gray-200 pb-10 transition-colors duration-500`} >
                    <Navbar />
                    <div className=" flex items-center ml-6 text-lg text-white justify-center mt-6">

                        <Box sx={{ width: 1000, minHeight: 829 }}>
                            <Masonry columns={matches ? 2 : 1} spacing={6} >
                                {itemData.map((item, index) => (
                                    <div className="shadow-xl" key={index} >
                                        {/* <Label>{item.title}</Label> */}
                                        <StyledAccordion className="rounded-t-md rounded-b-none" >
                                            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />}>
                                                <Typography className={`${ubuntu.className} text-lg`}>➡️{item.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>{item.desc}</AccordionDetails>
                                            <AccordionDetails>{item.link ? <a href={item?.link}><button className="p-1 px-2 bg-red-500 hover:bg-red-400 rounded-lg">Visit</button></a> : ''}  {item.github ? <a href={item?.github}><button className="p-1 px-2 bg-red-500 hover:bg-red-400 rounded-lg">Github</button></a> : ''}</AccordionDetails>
                                        </StyledAccordion>

                                        <Image className="rounded-b-md" src={item.img} />
                                    </div>
                                ))}
                            </Masonry>
                        </Box>
                    </div>


                    
                    <div className="text-cyan-700 text-xl md:text-3xl text-center">Files for all these projects are in my <a className="text-yellow-400  dark:text-red-500" href="https://github.com/Macky151203" target="_main">Github</a>.</div>
                    <div className="text-cyan-700 text-xl md:text-3xl text-center mt-4">Check out <a className="text-yellow-400  dark:text-red-500" href="https://linktr.ee/Subro20" target="_main">this</a> for data analysis related projects.</div>
                    <div className="flex justify-center mt-6">
                        <Link href="#tech" ><BsArrowUpCircle className="animate-bounce" style={{ fontSize: '40px' }} /></Link>
                    </div>
                </div>
            </Layout2>
        </>
    )
}
async function delay(promise) {
    await new Promise(resolve => {
        setTimeout(resolve, 5000)
    })
    return promise
}