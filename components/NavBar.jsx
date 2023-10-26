"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-2 md:block">
              {/* LOGO */}
              <Link href="/">
                <img src="/logo.png" alt="logo" className="w-16" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="  py-2 md:px-6 text-center border-b-2 md:border-b-0     md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#emotions" onClick={() => setNavbar(!navbar)}>
                    Emotions
                  </Link>
                </li>
                <li className="   py-2 px-6 text-center  border-b-2 md:border-b-0      md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#manifesto" onClick={() => setNavbar(!navbar)}>
                    Manifesto
                  </Link>
                </li>
                <li className="  py-2 px-6 text-center  border-b-2 md:border-b-0      md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="#self-awareness-test"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Self-awareness test
                  </Link>
                </li>
                <li className="  py-2 px-6 text-center  border-b-2 md:border-b-0     md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#work-with-us" onClick={() => setNavbar(!navbar)}>
                    Work With Us
                  </Link>
                </li>

                <li className="mx-16  py-2 px-6 text-center  md:border-b-0 bg-black text-white rounded-full   md:hover:text-purple-600 md:hover:bg-white      outline hover:outline-offset-1">
                  <Link href="#download-app" onClick={() => setNavbar(!navbar)}>
                    Download app
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
