import imgnosotros from "../../../public/assets/img/imgnosotros.webp";

import Image from "next/image";
import React from "react";

export const Nosotros = () => {
  return (
    <>
      <section className="nosotros w-[100%] p-5 md:h-[50] flex flex-col md:flex-row items-center justify-center bg-gradient-to-t from-[#000000] to-[#373737]">
        <div className="flex flex-col text-left w-[100%] md:w-[50%] justify-center items-center ml-4">
          <h2 className=" text-3xl md:text-6xl mb-4 text-white">
            LAF Argentina
          </h2>
          <p className="text-[white]">
            LAF Argentina es una liga de videojuegos dedicada a la F1 2023 que
            reúne a apasionados de la Fórmula 1 en PC, PlayStation y Xbox.{" "}
            <br />
            <br />
            Esta comunidad diversa de pilotos, desde principiantes hasta
            expertos, compite en campeonatos que abarcan todas las plataformas
            principales.
            <br />
            <br />
            LAF Argentina promueve la deportividad y el respeto mutuo entre sus
            miembros y organiza eventos regulares, carreras y torneos para poner
            a prueba las habilidades de los pilotos.
            <br />
            <br />
            Además de las carreras, la liga fomenta la camaradería y la
            comunidad, donde los fanáticos de la Fórmula 1 pueden socializar y
            compartir su pasión por las carreras virtuales.
            <br />
            <br />
            Si eres un entusiasta de la Fórmula 1 y los videojuegos, ¡únete a
            LAF Argentina para experimentar emocionantes carreras!
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] flex justify-center items-center ">
          <Image
            src={imgnosotros}
            alt="Nosotros"
            className=" w-[700px] rounded-xl"
          ></Image>
        </div>
      </section>
    </>
  );
};
