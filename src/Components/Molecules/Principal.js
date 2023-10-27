import Image from "next/image";
import fondoprincipal2 from "../../../public/assets/img/fondo-principal.png";


import React from "react";
import Link from "next/link";
import { Nosotros } from "../Atoms/Nosotros";

const Principal = () => {
  return (
    <>
      <main className="w-[100%] h-[100vh] relative">
        <Image
          className="w-[100%] h-[100%] absolute object-cover object-center"
          src={fondoprincipal2}
          alt="fondo-principal"
        />
        <div className="w-[100%] h-[95%] bg-black/10  z-0 absolute">
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-start ">
            <h4 className="text-white text-3xl sm:text-6xl md:text-7xl  pl-3 mt-3">
              Bievenidos a
            </h4>
            <h1 className="text-white text-2xl  md:text-7xl pl-3 mt-3">
              Superliga Sim Racing
            </h1>
            <Link
              href="/inscripcion"
              className="text-white text-2xl sm:text-4xl bg-gradient-to-t from-[#000000] to-[#373737] rounded-lg p-2 ml-3 mt-3"
            >
              <span>Inscribite </span>
              
             
            </Link>
          </div>
        </div>
      </main>
      <Nosotros />
    </>
  );
};

export default Principal;
