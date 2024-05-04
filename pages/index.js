import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/abt"
import Connect from "@/components/handle"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { BsArrowUpCircle } from 'react-icons/bs'
import Link from "next/link"
import Layout from "@/components/layout"
import Skills from "@/components/skills"
import Layout3 from "@/components/popin/page"
import Layout2 from "@/components/imageslayout"
import {Ubuntu} from '@next/font/google'
import { useEffect,useState } from "react"
// import '../styles/style.css'
const ubuntu=Ubuntu({
  subsets:['latin'],
  weight:'400',
})





export default function Home() {
  const[navColor,updateNavbar]=useState(false)
  useEffect(()=>{
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    scrollHandler()
    window.addEventListener("scroll", scrollHandler);
  
  })

  return (

    <>

      <Layout2 >


        <div id="tech" className={`${ubuntu.className} bg-stone-800 dark:bg-slate-300 transition-colors scroll-smooth duration-500 `}>
          <Navbar navColor={navColor} />
          <Layout3><Hero /></Layout3>
          
          <Layout3><About /></Layout3>

          <div id="skills">
            <Layout3><Skills /></Layout3>

          </div>
          <Layout3><Contact /></Layout3>


          <Connect />
          <div className="flex justify-center mt-8">
            <Link href="#tech"  ><BsArrowUpCircle className="animate-bounce" style={{ fontSize: '40px' }} /></Link>
          </div>

          <Footer />
        </div>

      </Layout2 >
    </>
  )
}