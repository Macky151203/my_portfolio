import Navbar from "@/components/navbar"
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
import {BsArrowUpCircle} from 'react-icons/bs'
import Link from "next/link"
import Layout from "@/components/layout"


export default function Project(){
    return (
        <>
        <Layout>
        <div id="tech" className="bg-stone-800 dark:bg-gray-200 pb-10 transition-colors duration-500">
        <Navbar />
        <div className="flex flex-row mt-24 m-2 flex-wrap font-mono">
            <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={travelapp} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">My first project was a travel ticket booking frontend made using svelte for DAKSH hackathon 22</div>
            </div>
            {/* <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={clock} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A time app made using Javascript.Nothing special.</div>
            </div> */}
            {/* <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={todo} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A TO-DO list made using Javascript where the data is stored in local storage. Deployed in Vercel but the link is broken due to vercel update:(</div>
            </div> */}
            {/* <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={mg} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A Memegenerator made using React.Didn't deploy it.</div>
            </div> */}
            <div className="flex flex-col m-10 md:w-80 ">
                <Image className="rounded-xl object-cover" src={weather} />
                <div className=" text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A weather forecast app made using React which shows the current weather conditions of the entered city name. link- <a className="font-bold text-yellow-400 dark:text-red-500" href="https://react-weatherapp-mduj-9n32w9cdv-macky151203.vercel.app" target="_main">Click here</a></div>
            </div>
            <div className="flex flex-col m-10 md:w-80 ">
                <Image className="rounded-xl " src={fend} />
                <div className=" text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A weather forecast app made using React which shows the current weather conditions of the entered city name. link- <a className="font-bold text-yellow-400 dark:text-red-500" href="https://react-weatherapp-mduj-9n32w9cdv-macky151203.vercel.app" target="_main">Click here</a></div>
            </div>
            <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={pexp} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A android app made using Flutter which can manage the weekly expense in a distributed manner to keep track of our spendings.</div>
            </div>
            <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl object-cover" src={meal} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">A android app made using Flutter which can manage the weekly expense in a distributed manner to keep track of our spendings.</div>
            </div>
            <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={mpf} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">This website made using Nextjs. Deployed in vercel</div>
            </div>
            <div className="flex flex-col m-10 md:w-80">
                <Image className="rounded-xl" src={manage} />
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-xl">Made a Manage web app using tailwind for club recruitment</div>
            </div>
            <div className="flex flex-col m-10 md:w-80 items-center justify-center">
                
                <div className="text-center mt-6 text-cyan-600 dark:text-cyan-800 text-3xl">More to come...</div>
            </div>
            

        </div>
        <div className="text-cyan-700 text-3xl text-center">Files for all these projects are in my <a className="text-yellow-400  dark:text-red-500" href="https://github.com/Macky151203" target="_main">Github</a>.</div>
        <div className="flex justify-center mt-6">
        <Link href="#tech" ><BsArrowUpCircle className="animate-bounce" style={{fontSize:'40px'}} /></Link>
        </div>
        </div>
        </Layout>
        </>
    )
}