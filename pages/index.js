import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/abt"
import Connect from "@/components/handle"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import {BsArrowUpCircle} from 'react-icons/bs'
import Link from "next/link"
import Layout from "@/components/layout"
import Skills from "@/components/skills"



export default function Home(){
  return (
    
    <>
   
    <Layout>
    <div id="tech" className=" bg-stone-800 dark:bg-slate-300 transition-colors duration-500">
    
    <Navbar />
    <Hero />
    <About/>
    <div id="skills">
    <Skills />
    </div>
    
    <Contact />
    <Connect />
    <div className="flex justify-center mt-8">
        <Link href="#tech" className="scroll-smooth" ><BsArrowUpCircle className="animate-bounce" style={{fontSize:'40px'}} /></Link>
        </div>
    
    <Footer />
    </div>
    
    </Layout>
    </>
  )
}