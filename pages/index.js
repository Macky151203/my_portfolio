import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/me"
import Contact from "@/components/contact"
import Connect from "@/components/connect"
import Footer from "@/components/footer"


export default function Home(){
  return (
    <>
    <div className="bg-stone-800">
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Connect />
    <Footer />
    </div>
    </>
  )
}