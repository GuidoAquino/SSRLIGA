Image;
import whatapps from "../../../public/assets/img/whatappslogo.webp";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const FormularioInscripcion = () => {
 

  return (
    <>
      <div className="w-[90%] h-auto sm:w-[40%] sm:h-[450px] text-[12px] bggris text-center flex flex-col rounded-lg">
        <form>
          <h3 className="text-white m-5 md:text-4xl">Completa los datos</h3>

          <div className="container ">
            <div className="entryarea " >
              <input type="text" required />
              <div className="labelline w-[90%]  p-3 bg-transparent ">Nombre y Apellido</div>
            </div>
            <div className="entryarea " >
              <input type="text" required />
              <div className="labelline w-[90%]  p-3 bg-transparent ">ID PSN</div>
            </div>
          </div>
          
         
          <label
            htmlFor="plataforma"
            className="flex flex-col justify-center items-center"
          ></label>
            <select
              name="plataforma"
              id="plataforma"
              className=" w-[90%] mb-4 py-3 px-2 bg-transparent border-b-2 border-[#ca1b1e] outline-none formoption"
            >
              <option value="seleccionar" className="text-black">
                Seleccionar Plataforma
              </option>
              <option className="formoption bggris" value="PC">
                PS5
              </option>
              <option className="formoption bggris" value="PS4/PS5">
                PS4
              </option>
            </select>
            <label
            htmlFor="ligainteresada"
            className="flex flex-col justify-center items-center"
          ></label>
            <select
              name="ligainteresada"
              id="ligainteresada"
              className="w-[90%] mb-4 py-3 px-2 bg-transparent border-b-2 border-[#ca1b1e]   outline-none formoption"
            >
              <option value="ligainteresada " className="text-black">
                Seleccionar Liga
              </option>
              <option className="formoption bggris" value="Liga A">
                Cat PRO * SIN AYUDAS *
              </option>
            </select>
          

          <button
            type="submit"
            className=" border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white w-[50%] mx-auto mt-5 p-3 rounded-lg text-white"
          >
            Enviar
          </button>
          <div className="discord flex flex-row items-center justify-center w-[90%] mt-5 hover:scale-105 transition mx-auto mb-[10px]">
            <a
              href={`https://chat.whatsapp.com/FLCi5DMthE3LYJCNrUH5m8`}
              target="_blank"
            >
              <span className="text-white ">Registrate y unite</span>
            </a>
            <a
              href={`https://chat.whatsapp.com/FLCi5DMthE3LYJCNrUH5m8`}
              target="_blank"
            >
              <Image src={whatapps} alt="Discord " className="w-[30px]"></Image>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormularioInscripcion;
