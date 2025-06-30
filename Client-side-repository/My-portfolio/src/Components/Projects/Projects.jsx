import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
   const [projectsData, setProjectsData] = useState([]);

   useEffect(() => {
      const fetchProjects = async () => {
         try {
            const response = await axios.get("http://localhost:5000/projects");
            const data = await response.data;
            setProjectsData(data);
         } catch (error) {
            console.error("Error fetching projects:", error);
         }
      };

      fetchProjects();
   });

   return (
      <div>
         <section className="py-16 px-6 md:px-12 text-white">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-primary mb-4 !font-inter">
                  Featured Projects
               </h2>
               <p className="text-lg text-neutral-500 !font-nunito font-semibold">
                  Here are some of the projects I have worked on recently.
               </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-6">
               {projectsData.map((project, index) => (
                  <ProjectsCard
                     key={project._id}
                     project={project}
                     index={index}
                  />
               ))}
            </div>
         </section>
      </div>
   );
};

export default Projects;
