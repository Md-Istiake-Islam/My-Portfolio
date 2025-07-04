import React from "react";

const ProjectsDetails = ({ project, modalId }) => {
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
      <dialog id={modalId} className="modal">
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
                  <h2 className="text-3xl font-bold text-[#1a9fff]">{title}</h2>

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
   );
};

export default ProjectsDetails;
