import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import logo from "../../public/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-21 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 bg-gradient-to-r bg-orange-100 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width="87" height="35" />
        </Link>
        <nav className="hidden md:flex gap-4 text-xl">
          <Link className="text-orange-800" href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div onClick={handleNavbar} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/78" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-orange-100 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/"}>
                <Image src={logo} alt="logo" width="87" height="35" />
              </Link>
              <div
                onClick={handleNavbar}
                className="rounded-full shadow-lg bg-white p-3 shadow-orange-300 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b my-4 border-orange-200 border-3">
              <p className="w-[85%] md:w-[90%] text-3xl">
                Let`s go to the wonderland
              </p>
            </div>
          </div>
          <div>
            <nav className="flex flex-col">
              <div className="py-4">
                <Link href="/">Home</Link>
              </div>
              <div className="py-4">
                <Link href="/about">About</Link>
              </div>
              <div className="py-4">
                <Link href="/skills">Skills</Link>
              </div>
              <div className="py-4">
                <Link href="/contact">Contact</Link>
              </div>
            </nav>

            <div className="border-b my-4 border-orange-200 border-3"></div>
            <div className="flex items-center justify-between my-4 w-full">
              <div className="rounded-full shadow-lg bg-white p-3 shadow-orange-300 cursor-pointer">
                <Link href="https://www.linkedin.com/in/carole-b-740569221/">
                  <FaLinkedinIn size={25} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg bg-white p-3 shadow-orange-300 cursor-pointer">
                <Link href="https://github.com/el2907/">
                  <FaGithub size={25} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg bg-white p-3 shadow-orange-300 cursor-pointer">
                <Link href="/">
                  <AiOutlineMail size={25} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg bg-white p-3 shadow-orange-300 cursor-pointer">
                <Link href="/contact">
                  <BsFillPersonLinesFill size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
