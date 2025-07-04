import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import ProjectsDetails from "./ProjectsDetails";

const ProjectsCard = ({ project, index }) => {
   const { title, image_url, brief_description, tools, repo_link, live_link } =
      project;

   const modalId = `modal_${index}`;

   return (
      <div className="flex flex-col lg:flex-row gap-10 bg-[#020D22] rounded-xl shadow-md overflow-hidden p-6 md:p-10 border border-[#1b2538]">
         {/* Left: Image */}
         <div
            className={`lg:w-1/2 w-full ${
               index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
         >
            <img
               src={image_url}
               alt={title}
               className="w-full h-full object-cover rounded-lg aspect-[16/9]"
            />
         </div>

         {/* Right: Content */}
         <div
            className={`lg:w-1/2 w-full flex flex-col justify-center ${
               index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
         >
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-300 mb-2">{title}</h3>

            {/* Description */}
            <p className="text-neutral-400 text-sm mb-4">{brief_description}</p>

            {/* Tools */}
            <div className="mb-6">
               <div className="flex flex-wrap gap-2 my-3">
                  {tools.map((tool, idx) => (
                     <span
                        key={idx}
                        className="bg-[#062445] text-gray-200 text-xs px-4 py-2 rounded-lg hover:bg-[#062545b7] "
                     >
                        {tool}
                     </span>
                  ))}
               </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
               <a
                  href={repo_link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-base  text-gray-300 font-semibold  transition flex items-center gap-2 border-b border-b-transparent hover:border-b-primary  hover:text-primary"
               >
                  <FiGithub className="text-1xl" />
                  GitHub Repo
               </a>
               <a
                  href={live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-base  text-gray-300 font-semibold  transition flex items-center gap-2 border-b border-b-transparent hover:border-b-primary hover:text-primary"
               >
                  <FaExternalLinkAlt className="text-1xl" />
                  Live Site
               </a>

               <button
                  onClick={() => document.getElementById(modalId).showModal()}
                  className="px-4 py-2 text-base  text-gray-300 font-semibold  transition flex items-center gap-2 border-b border-b-transparent hover:border-b-primary hover:text-primary"
               >
                  <TbListDetails className="text-1xl" />
                  Details
               </button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {<ProjectsDetails project={project} modalId={modalId} />}
         </div>
      </div>
   );
};

export default ProjectsCard;
