import React from "react";
import Navbar from "./Components/Header/Navbar";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/AboutMe";
import SkillsSection from "./Components/SkillsSection";
import Projects from "./Components/Projects/Projects";
import ContactSection from "./Components/ContactSection";
function App() {
   return (
      <>
         <div className="bg-[#020617] min-h-screen">
            <section className="sticky top-0 z-50">
               <Navbar />
            </section>
            <section id="home">
               <Banner />
            </section>
            <section id="about">
               <AboutMe />
            </section>
            <section>
               <SkillsSection />
            </section>
            <section id="project">
               <Projects />
            </section>
            <section id="contact">
               <ContactSection />
            </section>
         </div>
      </>
   );
}

export default App;
