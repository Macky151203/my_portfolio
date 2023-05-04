import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/me"
import Contact from "@/components/contact"
import Connect from "@/components/connect"
import Footer from "@/components/footer"
import {BsArrowUpCircle} from 'react-icons/bs'
import Link from "next/link"
import Layout from "@/components/layout"


export default function Home(){
  return (
    <>
    <Layout>
    <div id="tech" className=" bg-stone-800 dark:bg-gray-100 transition-colors duration-500">
    
    <Navbar />
    <Hero />
    
    <About />
    <Contact />
    <Connect />
    <Footer />
    <div className="flex justify-center mt-8">
        <Link href="#tech" className="scroll-smooth" ><BsArrowUpCircle className="animate-bounce" style={{fontSize:'40px'}} /></Link>
        </div>
    </div>
    </Layout>
    </>
  )
}