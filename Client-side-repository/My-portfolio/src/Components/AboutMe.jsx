import React from "react";
import AsideImg from "../assets/About-aside-Img.png";

const AboutMe = () => {
   return (
      <div>
         <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div className="pt-20 hidden lg:block">
                  <img
                     src={AsideImg}
                     alt=""
                     className=" max-w-lg rounded-xl "
                  />
               </div>
               <div className="space-y-6 text-neutral-300 text-xl ">
                  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 flex flex-col gap-4 !font-inter">
                     <span className="text-gray-200 !font-inter">
                        Are you looking for the best
                     </span>{" "}
                     about me?
                  </h2>
                  <div className="max-w-xl ">
                     <p className="text-neutral-400 text-base !font-inter mb-4 leading-6">
                        As a full-stack developer, I specialize in building
                        dynamic, scalable, and secure web applications from the
                        ground up. My expertise spans frontend technologies like{" "}
                        <strong>React.js</strong> and{" "}
                        <strong>Tailwind CSS</strong>
                        <strong>Node.js</strong>, <strong>Express.js</strong>,
                        and <strong>MongoDB</strong>.
                     </p>

                     <p className="text-neutral-400 text-base !font-inter mb-4 leading-6">
                        My journey into the world of programming began in 2024
                        through Programming Hero, and it’s been a path of
                        relentless curiosity and self-driven growth ever since.
                        What started as an interest during my spare time quickly
                        became a full-fledged passion and a central part of my
                        daily life. I immersed myself in mastering technologies
                        like <strong>JavaScript</strong>,{" "}
                        <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
                        <strong>React.js</strong>, and <strong>MongoDB</strong>
                        —building from foundational concepts to full-stack web
                        application development.
                     </p>

                     <p className="text-neutral-400 text-base !font-inter mb-4 leading-6">
                        I’m passionate about building clean, responsive, and
                        meaningful digital experiences. Whether it's designing
                        seamless interfaces with React and Tailwind or
                        structuring secure backends with Express and MongoDB, I
                        find joy in creating systems that feel intuitive and
                        perform efficiently. Beyond development, I’m drawn to
                        the inner workings of technology—assembling machines,
                        solving hardware puzzles, and always staying curious. I
                        believe that great code is crafted with both logic and
                        creativity, and I bring that mindset into every project
                        I take on.
                     </p>

                     <p className="text-neutral-400 text-base !font-inter leading-6">
                        I’m naturally curious and love learning through
                        tinkering and research, especially in my spare time.
                        Whether I’m testing a new tool, watching tech
                        breakdowns, or diving into a new topic, I’m always
                        looking for ways to expand my knowledge and
                        skills.Outside of web development, I’ve always been
                        drawn to exploring how technology works at a deeper
                        level.When I’m not immersed in tech, I find balance
                        through video games, spontaneous outdoor moments, and
                        spending time with the things that recharge my
                        creativity. I believe that the best work comes from a
                        well-rounded life, and I try to bring both focus and
                        imagination into everything I do.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutMe;
