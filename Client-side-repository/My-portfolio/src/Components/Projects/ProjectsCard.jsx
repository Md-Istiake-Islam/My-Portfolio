import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const ProjectsCard = ({ project, index }) => {
   const {
      title,
      image_url,
      brief_description,
      tools,
      repo_link,
      live_link,
      challenges_faced,
      future_plans,
      main_features,
   } = project;

   return (
      <div className="flex flex-col md:flex-row gap-10 bg-[#020D22] rounded-xl shadow-md overflow-hidden p-6 md:p-10 border border-[#1b2538]">
         {/* Left: Image */}
         <div
            className={`md:w-1/2 w-full ${
               index % 2 === 0 ? "order-1" : "order-2"
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
            className={`md:w-1/2 w-full flex flex-col justify-center ${
               index % 2 === 0 ? "order-2" : "order-1"
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
                  onClick={() =>
                     document.getElementById("my_modal_4").showModal()
                  }
                  className="px-4 py-2 text-base  text-gray-300 font-semibold  transition flex items-center gap-2 border-b border-b-transparent hover:border-b-primary hover:text-primary"
               >
                  <TbListDetails className="text-1xl" />
                  Details
               </button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
               <div className="modal-box w-11/12 max-w-5xl bg-[#020D22]">
                  <div className="bg-[#06264579] text-white rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto border border-[#1b2538]">
                     {/* Project Image */}
                     <img
                        src={image_url}
                        alt={title}
                        className="w-full object-cover h-60 md:h-80"
                     />

                     {/* Content */}
                     <div className="p-6 space-y-4">
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-[#1a9fff]">
                           {title}
                        </h2>

                        {/* Brief Description */}
                        <p className="text-neutral-300 text-sm leading-relaxed">
                           {brief_description}
                        </p>

                        {/* Features */}
                        <div>
                           <h3 className="text-lg font-semibold text-[#1a9fff] mb-2">
                              Key Features:
                           </h3>
                           <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                              {main_features.map((feature, index) => (
                                 <li key={index}>{feature}</li>
                              ))}
                           </ul>
                        </div>

                        {/* Tools */}
                        <div>
                           <h3 className="text-lg font-semibold text-[#1a9fff] mb-2">
                              Tools & Technologies:
                           </h3>
                           <div className="flex flex-wrap gap-2">
                              {tools.map((tool, index) => (
                                 <span
                                    key={index}
                                    className="bg-[#1a9fff] text-black text-xs px-3 py-1 rounded-full font-medium"
                                 >
                                    {tool}
                                 </span>
                              ))}
                           </div>
                        </div>

                        {/* Challenges */}
                        <div>
                           <h3 className="text-lg font-semibold text-[#1a9fff] mb-2">
                              Challenges Faced:
                           </h3>
                           <p className="text-sm text-neutral-400 leading-relaxed">
                              {challenges_faced}
                           </p>
                        </div>

                        {/* Future Plans */}
                        <div>
                           <h3 className="text-lg font-semibold text-[#1a9fff] mb-2">
                              Future Plans:
                           </h3>
                           <p className="text-sm text-neutral-400 leading-relaxed">
                              {future_plans}
                           </p>
                        </div>

                        {/* Buttons */}
                        <div className="pt-4 flex flex-wrap gap-4">
                           <a
                              href={live_link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 bg-[#1a9fff] text-black font-semibold rounded hover:bg-[#39b5ff] transition"
                           >
                              Live Site
                           </a>
                           <a
                              href={repo_link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 border border-[#1a9fff] text-[#1a9fff] font-semibold rounded hover:bg-[#1a9fff] hover:text-black transition"
                           >
                              GitHub Repo
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="modal-action">
                     <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                     </form>
                  </div>
               </div>
            </dialog>
         </div>
      </div>
   );
};

export default ProjectsCard;
