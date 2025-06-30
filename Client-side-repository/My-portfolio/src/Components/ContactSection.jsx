import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import whatsappQr from "./../assets/whatsApp_qr_code.png";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

import Swal from "sweetalert2";

const ContactSection = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_8bl2vxp",
            "template_yecjvuc",
            form.current,
            "qahIymn_Q94fKWfC3"
         )
         .then(() => {
            Swal.fire({
               icon: "success",
               title: "Message Sent",
               text: "Thank you for contacting us! We'll get back to you soon.",
               confirmButtonColor: "#75c544",
            });
            form.current.reset();
         })
         .catch(() => {
            Swal.fire({
               icon: "error",
               title: "Message Failed",
               text: "Oops! Something went wrong. Please try again.",
               confirmButtonColor: "#d33",
            });
         });
   };

   return (
      <section className=" text-white py-16 px-6 md:px-12">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-6 flex justify-center">
               <div className="bg-[#020D22] border border-[#1b2538] flex flex-col p-8 rounded-lg mt-9">
                  <img src={whatsappQr} alt="" className="w-88 rounded-lg" />
                  <div className=" space-y-4  text-neutral-300 mt-8">
                     <p className="flex items-start gap-3 !font-inter text-neutral-400 hover:text-primary border-b border-b-transparent hover:border-b-primary max-w-max">
                        <TfiLocationPin className="text-1xl" /> Dhaka,
                        Bangladesh
                     </p>
                     <p className="flex items-start gap-3 !font-inter text-neutral-400 hover:text-primary border-b border-b-transparent hover:border-b-primary max-w-max">
                        <MdOutlineMail className="text-1xl" />{" "}
                        istiakeislam7@gmail.com
                     </p>
                     <p className="flex items-start gap-3 !font-inter text-neutral-400 hover:text-primary border-b border-b-transparent hover:border-b-primary max-w-max">
                        <FiPhoneCall className="text-1xl" /> 01704708479
                     </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6 text-lg ">
                     <a
                        href="https://github.com/Md-Istiake-Islam"
                        target="_blank"
                        rel="noreferrer"
                        className="btn text-neutral-950  bg-[#1a9fff] flex items-center gap-2 hover:bg-[#1aa0ffd0] rounded-lg"
                     >
                        <FiGithub className="text-1xl" />
                        Github
                     </a>
                     <a
                        href="https://www.linkedin.com/in/md-istiake-islam-4b36b5371/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn text-neutral-950  bg-[#1a9fff] flex items-center gap-2 hover:bg-[#1aa0ffd0] rounded-lg"
                     >
                        <TbBrandLinkedin className="text-1xl" />
                        linkedin
                     </a>
                  </div>
               </div>
            </div>

            {/* Right: Contact Form */}
            <form ref={form} onSubmit={sendEmail}>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-10">
                  Get in touch with us,{" "}
                  <span className="text-primary">today</span>
               </h2>

               <div className="space-y-8 max-w-xl">
                  <input
                     type="text"
                     name="user_name"
                     placeholder="Your Name *"
                     required
                     className="w-full p-3 rounded border-b border-b-neutral-400 text-white outline-none"
                  />
                  <input
                     type="email"
                     name="user_email"
                     placeholder="Your Email *"
                     required
                     className="w-full p-3 rounded border-b border-b-neutral-400 text-white outline-none"
                  />
                  <input
                     type="text"
                     name="subject"
                     placeholder="Subject *"
                     required
                     className="w-full p-3 rounded border-b border-b-neutral-400 text-white outline-none"
                  />
                  <input
                     type="tel"
                     name="phone"
                     placeholder="Phone Number *"
                     required
                     className="w-full p-3 rounded border-b border-b-neutral-400 text-white outline-none"
                  />
                  <textarea
                     name="message"
                     rows="5"
                     placeholder="Your Message *"
                     required
                     className="w-full p-3 rounded border-b border-b-neutral-400 text-white outline-none"
                  ></textarea>

                  <button
                     type="submit"
                     className="bg-[#1a9fff] text-neutral-950 px-6 py-3 rounded-lg hover:bg-[#1aa0ffd0] transition !font-inter"
                  >
                     Send Message
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
};

export default ContactSection;
