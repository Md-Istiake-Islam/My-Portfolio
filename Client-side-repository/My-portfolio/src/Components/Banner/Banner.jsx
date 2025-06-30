import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const getProfileData = async () => {
   const res = await axios.get(
      "https://portfolio-md-istiake.vercel.app/profileInfo"
   );
   return res.data;
};

const Banner = () => {
   const [loading, setLoading] = useState(false);
   // State variables for image and name
   const [image, setImage] = useState(null);
   const [name, setName] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const data = await getProfileData();
            data.map((item) => {
               setImage(item.image_url);
               setName(item.name);
            });
            setLoading(false);
         } catch (error) {
            console.error("Error fetching profile data:", error);
         }
      };
      fetchData();
   }, []);
   return (
      <div className="hero min-h-[70vh]">
         <div className="container w-full mx-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="order-first flex justify-end lg:order-last">
               <img
                  src={image}
                  className="max-w-md xl:max-w-lg rounded-full aspect-square object-cover ring-4 ring-primary"
               />
            </div>
            <div className="order-last flex flex-col justify-center lg:order-first">
               <p className="text-2xl !font-nunito font-bold text-neutral-500 mb-2">
                  Hello, I am
               </p>
               <h1 className="text-3.5xl font-bold !font-nunito text-neutral-400">
                  {name}
               </h1>
               <p className="mb-12 text-lg text-neutral-500 !font-nunito font-semibold">
                  <span className="text-4.5xl text-primary font-bold !font-PT-serif">
                     Junior Full Stack Web Developer
                  </span>{" "}
                  <br />
                  Building Modern, Scalable Applications with React, Node.js &
                  MongoDB...
               </p>
               <div className="flex items-center gap-6 mb-6">
                  <motion.a
                     href="https://github.com/Md-Istiake-Islam"
                     target="_blank"
                     whileHover={{ x: 8 }} // Moves 8px to the right
                     transition={{ type: "spring", stiffness: 300 }}
                     className="flex items-center gap-2 text-neutral-400 text-lg border-b border-b-transparent hover:border-b-primary pb-0"
                  >
                     <IoLogoGithub className="mb-0.5" />
                     Github
                  </motion.a>

                  <motion.a
                     href="https://www.linkedin.com/in/md-istiake-islam-4b36b5371/"
                     target="_blank"
                     whileHover={{ x: 8 }}
                     transition={{ type: "spring", stiffness: 300 }}
                     className="flex items-center gap-2 text-neutral-400 text-lg border-b border-b-transparent hover:border-b-primary pb-0"
                  >
                     <FaLinkedinIn className="mb-0.5" />
                     Linkedin
                  </motion.a>
               </div>
               <div className="min-h-9">
                  <motion.a
                     href="https://docs.google.com/document/d/1b72mBPDA6joiI7iZyVKUYCi1l69ujACCrgiVjcptqpA/edit?usp=sharing"
                     target="_blank"
                     whileHover={{ x: 8 }}
                     transition={{ type: "spring", stiffness: 300 }}
                     className=" max-w-max flex gap-2 text-xl text-primary border-b border-b-transparent hover:border-b-primary pb-0.5"
                  >
                     <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [15, -15, 15] }}
                        transition={{
                           duration: 1,
                           repeat: Infinity,
                           repeatType: "loop",
                           ease: "easeInOut",
                        }}
                     >
                        <FaRegFileAlt className=" text-2xl" />
                     </motion.span>
                     View Resume
                  </motion.a>
               </div>
            </div>
         </div>
         {loading ? (
            <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <LoadingSpinner></LoadingSpinner>
            </div>
         ) : (
            " "
         )}
      </div>
   );
};

export default Banner;
