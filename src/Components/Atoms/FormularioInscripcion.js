Image;
import discord from "../../../public/assets/img/discord.png";
import Image from "next/image";
import React from "react";

const FormularioInscripcion = () => {
  return (
    <>
    
    <div className="w-[80%] md:w-[40%] h-[60%] md:h-[60%] bggris text-center flex flex-col rounded-lg" >
      <form
        action=""
        
      >
        <h3 className="text-white m-5 md:text-4xl">Completa los datos</h3>

        <label htmlFor="nomape">
          <input
            className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none"
            type="text"
            name="nomape"
            placeholder="Nombre y Apellido"
          />
        </label>
        <label htmlFor="usuarioid">
          <input
            className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none"
            type="text"
            name="usuarioid"
            placeholder="ID"
          />
        </label>
        <label htmlFor="" className="flex flex-col justify-center items-center">
          <select
            name="plataforma"
            id="plataforma"
            className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none formoption"
          >
            <option value="seleccionar">Seleccionar Plataforma</option>
            <option className="formoption bggris" value="PC">
              PS5
            </option>
            <option className="formoption bggris" value="PS4/PS5">
              PS4 
            </option>
             </select>

          <select
            name="ligainteresada"
            id="ligainteresada"
            className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none formoption"
          >
            <option value="ligainteresada ">
              Seleccionar Liga
            </option>
            <option className="formoption bggris" value="Liga A">
              Cat PRO * SIN AYUDAS * 
            </option>
            <option className="formoption bggris" value="Liga B">
              Liga B
            </option>
          </select>
        </label>

        <button
          type="submit"
          className=" border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white w-[50%] mx-auto mt-5 p-3 rounded-lg text-white"
         
        >
          Enviar
        </button>
        <div className="discord flex flex-row items-center justify-center w-[90%] mt-5 hover:scale-105 transition mx-auto">
          <a href="https://discord.gg/sXtEbPewZR" target="_blank">
            <span className="text-white ">Registrate y unite</span>
          </a>
          <a href="https://discord.gg/sXtEbPewZR" target="_blank">
            <Image src={discord} alt="Discord " className="w-[60px]"></Image>
          </a>
        </div>
      </form>
      </div>
     
    </>
  );
};

export default FormularioInscripcion;
