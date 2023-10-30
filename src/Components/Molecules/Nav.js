import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/ssrlogovectorizado1.png";

const Nav = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bggris fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="colorrojo flex flex-row items-center"
                >
                  <Image
                    src={logo}
                    className="w-[70px] mr-1"
                    alt="Logo SSR"
                    title="Logo SSR"
                  ></Image>
                  <span className="hidden sm:flex">Superliga Sim Racing</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="colorrojo hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Inicio
                </Link>
                <Link
                  href="#posiciones"
                  className="colorrojo hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Posiciones
                </Link>
                <Link
                  href="/#calendario"
                  className="colorrojo hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Calendario
                </Link>
                 {/*<Link
                  href="#inscripcion"
                  className="colorrojo hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Inscripcion
                </Link>
                
                {/* <Link
                  href="/iniciarsesion"
                  className="colorrojo hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Iniciar Sesion
                </Link> */}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                    hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ca1b1e"
                  >
                    <path
                      strokeLinecap=" #ca1b1e round "
                      strokeLinejoin=" #ca1b1e round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ca1b1e"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
                  href="/"
                  className="colorrojo block hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Inicio
                </Link>
                <Link
                  href="#posiciones"
                  className="colorrojo block hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Posiciones
                </Link>
                <Link
                  href="#calendario"
                  className="colorrojo block hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Calendario
                </Link>
                {/* <Link
                   href="#inscripcion"
                   className="colorrojo block hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                 >
                   Inscripcion
                 </Link>
                
                 <Link
                  href="/iniciarsesion"
                  className="colorrojo block hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white rounded-lg p-2"
                >
                  Iniciar Sesion
                </Link> */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
