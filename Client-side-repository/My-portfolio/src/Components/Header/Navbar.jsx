import React from "react";

const navLinks = (
   <>
      <li>
         <a
            href="#home"
            className={
               "text-lg !font-nunito rounded-lg hover:text-primary hover:bg-transparent px-3 xl:px-8"
            }
         >
            Home
         </a>
      </li>
      <li>
         <a
            href="#project"
            className={
               "text-lg !font-nunito rounded-lg hover:text-primary hover:bg-transparent px-3 xl:px-8"
            }
         >
            Projects
         </a>
      </li>
      <li>
         <a
            href="#about"
            className={
               "text-lg !font-nunito rounded-lg hover:text-primary hover:bg-transparent px-3 xl:px-8"
            }
         >
            About
         </a>
      </li>
      <li>
         <a
            href="#contact"
            className={
               "text-lg !font-nunito rounded-lg hover:text-primary hover:bg-transparent"
            }
         >
            Contact
         </a>
      </li>
   </>
);

const Navbar = () => {
   return (
      <div className="bg-[#040311be] shadow-lg border-b border-b-[#0d0b32] py-4">
         <div className="container mx-auto navbar ">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
                  >
                     {navLinks}
                  </ul>
               </div>
               <a className=" flex items-center gap-5">
                  <img
                     src="./../../../public/Logo.png"
                     alt=""
                     className="w-14 "
                  />
                  <h4 className="text-3xl !font-domine text-primary font-bold">
                     Md Istiake
                  </h4>
               </a>
            </div>
            <div className="navbar-end hidden lg:flex">
               <ul className="menu menu-horizontal px-1 mr-3 xl:mr-10">
                  {navLinks}
               </ul>
               <div className="">
                  <a
                     href="https://docs.google.com/document/d/1b72mBPDA6joiI7iZyVKUYCi1l69ujACCrgiVjcptqpA/edit?usp=sharing"
                     target="_blank"
                     className="btn  text-gray-100 border-primary bg-transparent rounded-lg px-4 text-sm hover:bg-primary "
                  >
                     Resume
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
