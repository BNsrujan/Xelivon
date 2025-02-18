import Herosection from "./components/Herosection";
import Connect from "./components/Connect";
import Project from "./components/Project";
import { Vc } from "./components/Vc";
import About from "./components/About";
import Founder from "./components/Founder";
import Blog from "./components/Blog";
import Session from "./components/Session";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className=" relative p-4 flex  flex-col gap-7   ">
       <Navbar/>
      <Herosection/>
      <Vc/>
      <Project/>
      <About/>
      <Blog/>
      <Founder/>
      <Session/>
      <Connect/>
      <Footer/>
    </div>
  );
}
