import Image from "next/image";
import arabia from "../../../public/assets/img/arabia-saudita.png";

import React from "react";

const Calendario = () => {
  return (
    <>
      <div className="w-[320px] h-[100px] border-2 border-black flex flex-row bg-white/10">
        <div className="flex flex-row justify-center items-center">
          <span className="m-[10px]">1</span>
          <Image src={arabia} alt="Arabia" className="h-[80px] w-[80px] mr-[10px]"></Image>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h5 >GP Arabia Saudita</h5>
          <span>Cat PRO 27-10 </span>
          <span>22:15 Hs Arg </span>
        </div>
      </div>
    </>
  );
};

export default Calendario;
