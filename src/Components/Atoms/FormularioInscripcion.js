Image;
import whatapps from "../../../public/assets/img/whatappslogo.webp";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const FormularioInscripcion = () => {
  const [nomape, setNomape] = useState("");
  const [usuarioid, setUsuarioid] = useState("");

  const handleNomapeChange = (e) => {
    setNomape(e.target.value);
  };

  const handleUsuarioidChange = (e) => {
    setUsuarioid(e.target.value);
  };

  return (
    <>
      <div className="w-[90%] h-auto sm:w-[40%] sm:h-[450px] text-[12px] bggris text-center flex flex-col rounded-lg">
        <form>
          <h3 className="text-white m-5 md:text-4xl">Completa los datos</h3>

          <label htmlFor="nomape">
            <input
              className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none "
              type="text"
              name="nomape"
              placeholder={nomape ? "" : "Nombre y Apellido"}
              value={nomape}
              onChange={handleNomapeChange}
            />
          </label>
          <label htmlFor="usuarioid">
            <input
              className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none"
              type="text"
              name="usuarioid"
              placeholder={usuarioid ? "" : "ID"}
              value={usuarioid}
              onChange={handleUsuarioidChange}
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col justify-center items-center"
          >
            <select
              name="plataforma"
              id="plataforma"
              className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e] outline-none formoption"
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

            <select
              name="ligainteresada"
              id="ligainteresada"
              className="w-[90%] mb-4 p-3 bg-transparent border-b-2 border-[#ca1b1e]   outline-none formoption"
            >
              <option value="ligainteresada " className="text-black">
                Seleccionar Liga
              </option>
              <option className="formoption bggris" value="Liga A">
                Cat PRO * SIN AYUDAS *
              </option>
            </select>
          </label>

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
