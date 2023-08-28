import Navbar from "@/components/navbar"
import { Suspense, lazy ,SuspenseImage} from "react"
import Image from "next/image"
import vapi from '../../images/vapi.jpg'
import travelapp from '../../images/travelapp.png'
import clock from '../../images/clock.png'
import mpf from '../../images/mpf.png'
import weather from '../../images/weather.png'
import manage from '../../images/manage.png'
import fend from '../../images/fend.png'
import meal from '../../images/meal.png'
import pexp from '../../images/pexp.png'
import chat from '../../images/chat.png'

import { BsArrowUpCircle } from 'react-icons/bs'
import Link from "next/link"
import Layout2 from "@/components/imageslayout"
import Loading from "@/components/loading"
import { Ubuntu } from "@next/font/google"
// import Card from "@/components/card"
const Card= lazy(()=>import('../../components/card.js'))
const ubuntu=Ubuntu({
    subsets:['latin'],
    weight:'400',
  })


export default function Project() {
    return (
        <>
            <Layout2 >
                <div id="tech" className={`${ubuntu.className} bg-stone-800 dark:bg-gray-200 pb-10 transition-colors duration-500`} >
                    <Navbar />
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-1 mt-24  overflow-x-hidden">
                        <Suspense fallback={<div>Loading...</div>}>
                        <Card src={travelapp} content='My first project was a travel ticket booking frontend made using svelte for DAKSH hackathon 22' />
                        </Suspense>
                        
                        <Card src={weather} hr='https://react-weatherapp-mduj-9n32w9cdv-macky151203.vercel.app' content='A weather forecast app made using React which shows the current weather conditions of the entered city name.'/>
                        <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md ">
                            <Image className="rounded-xl hover:cursor-pointer hover:blur-sm " src={fend} />
                            <div className=" text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A Frontend web app made using tailwindcss link- <a className="font-bold text-yellow-400 dark:text-red-500" href="https://dcs-rose.vercel.app" target="_main">Click here</a></div>
                        </div>
                        <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md">
                            <Image className="rounded-xl hover:cursor-pointer hover:blur-sm" src={pexp} />
                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">An android app made using Flutter which can manage the weekly expense in a distributed manner to keep track of our spendings.</div>
                        </div>
                        <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md">
                            <Image className="rounded-xl hover:cursor-pointer hover:blur-sm object-cover" src={meal} />
                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">An meals based Native app made using flutter with tab navigation.</div>
                        </div>
                        <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md">
                            <Image className="rounded-xl hover:cursor-pointer hover:blur-sm" src={mpf} />
                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">This website made using Nextjs. Deployed in vercel</div>
                        </div>
                        {/* <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md">
                            <Image className="rounded-xl hover:cursor-pointer hover:blur-sm" src={manage} />
                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl"></div>
                        </div> */}
                        <Card src={manage} content='Made a Manage web app using tailwind for club recruitment' />
                        <div className="flex flex-col m-6 md:w-80 dark:shadow-md p-1 rounded-md ">
                            <Suspense fallback={<Loading />}>

                                <Image className="rounded-xl hover:cursor-pointer hover:blur-sm" src={chat} />

                            </Suspense>
                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">Made a Ai chat similar to chatgpt using vercel's ai sdk and Firebase, link- <a className="font-bold text-yellow-400 dark:text-red-500" href="https://temp-pi-two.vercel.app" target="_main">Click here</a></div>
                        </div>
                        {/* <div className="m-6 md:w-80">
                            <Loading />
                        </div> */}
                        <div className="flex flex-col m-6 md:w-80 items-center justify-center">

                            <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-3xl">More to come...</div>
                        </div>


                    </div>
                    <div className="text-cyan-700 text-3xl text-center">Files for all these projects are in my <a className="text-yellow-400  dark:text-red-500" href="https://github.com/Macky151203" target="_main">Github</a>.</div>
                    <div className="text-cyan-700 text-3xl text-center mt-4">Check out <a className="text-yellow-400  dark:text-red-500" href="https://linktr.ee/Subro20" target="_main">this</a> for data analysis related projects.</div>
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