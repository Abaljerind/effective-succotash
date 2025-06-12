import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    ScrollTrigger.defaults({
      scroller: ".wrapper",
    });

    gsap.utils.toArray(".panel").forEach((panel, index) => {
      gsap.to(`.bullet-${index + 1}`, {
        background: "#fff",
        scrollTrigger: {
          trigger: panel,
          toggleActions: "play reverse play reverse",
        },
      });
    });
  });

  return (
    <>
      <Nav />
      <div className="fixed bottom-0 z-50 flex h-[70vh] w-24 flex-col items-center justify-between p-10">
        <div className="flex -rotate-90 items-center gap-8">
          <p>Eng</p>
          <div className="h-[1px] w-20 bg-white/50"></div>
          <p>Ar</p>
        </div>
        <div className="space-y-8 [&>*]:cursor-pointer">
          <FaBehance className="hover:text-orange-500" />
          <FaFacebook className="hover:text-orange-500" />
          <FaInstagram className="hover:text-orange-500" />
        </div>
      </div>

      <div className="fixed top-2/4 right-10 z-50 space-y-6">
        <div className="bullet-1 size-2 rounded-full bg-white/25"></div>
        <div className="bullet-2 size-2 rounded-full bg-white/25"></div>
        <div className="bullet-3 size-2 rounded-full bg-white/25"></div>
      </div>

      <div className="wrapper">
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
