import {
   FaHtml5,
   FaCss3Alt,
   FaJs,
   FaReact,
   FaGithub,
   FaNodeJs,
   FaFigma,
} from "react-icons/fa";
import {
   SiFirebase,
   SiMongodb,
   SiTailwindcss,
   SiDaisyui,
   SiExpress,
   SiJsonwebtokens,
} from "react-icons/si";

const skills = [
   { icon: <FaHtml5 size={40} className="text-orange-500" />, label: "HTML" },
   { icon: <FaCss3Alt size={40} className="text-blue-500" />, label: "CSS" },
   {
      icon: <FaJs size={40} className="text-yellow-400" />,
      label: "JavaScript",
   },
   { icon: <FaReact size={40} className="text-cyan-400" />, label: "React JS" },
   {
      icon: <SiExpress size={40} className="text-gray-300" />,
      label: "Express JS",
   },
   {
      icon: <FaNodeJs size={40} className="text-green-600" />,
      label: "Node JS",
   },
   {
      icon: <SiJsonwebtokens size={40} className="text-teal-400" />,
      label: "JWT",
   },
   {
      icon: <SiFirebase size={40} className="text-yellow-500" />,
      label: "Firebase",
   },
   {
      icon: <SiMongodb size={40} className="text-green-500" />,
      label: "MongoDB",
   },
   {
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
      label: "Tailwind CSS",
   },
   {
      icon: <SiDaisyui size={40} className="text-pink-400" />,
      label: "DaisyUI",
   },
   { icon: <FaGithub size={40} className="text-white" />, label: "GitHub" },
];

const SkillsSection = () => {
   return (
      <section className="relative  py-16 px-6 md:px-12 text-white">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 !font-inter">
               Skills That Power My Work
            </h2>
         </div>

         {/* Skill Cards */}
         <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6  mx-auto bg-[#020D22] px-26 py-16 rounded-lg border border-[#1b2538]">
            {skills.map((skill, idx) => (
               <div
                  key={idx}
                  className="bg-[#062445] hover:bg-[#1f3a58] shadow-md rounded-md p-6 flex flex-col items-center justify-center transition-all duration-300"
               >
                  {skill.icon}
                  <p className="mt-3 text-sm font-medium">{skill.label}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default SkillsSection;
