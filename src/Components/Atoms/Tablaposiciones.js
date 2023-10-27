import React from "react";
import data from "../../../db.json";
import { useState } from "react";

const Tablaposiciones = () => {
  const [tablaActiva, setTablaActiva] = useState("pilotos");

  const manejarClicEnTabla = (nombreTabla) => {
    setTablaActiva(nombreTabla);
  };

  const pilotos = [...data.pilotos];
  const escuderias = [...data.escuderias]

  pilotos.sort((a, b) => b.puntos - a.puntos);
  escuderias.sort((a, b) => b.puntos - a.puntos);
  return (
    <>
      <div id="posiciones">
        <div className="tablasposiciones  flex justify-center items-center w-[100%] md:h-[100vh] min-h-[120vh] py-[10px]  bgposiciones bg-cover bg-no-repeat ">
          <div className="posiciones  text-white md:w-[80%] w-[95%] h-[80%]  mb-3 sm:grid grid-rows-12 sm:grid-cols-8  sm:gap-3  rounded-lg   ">
            <div className="ligas  col-span-1 row-span-6  flex flex-col justify-start items-center bggris rounded-lg ">
              <div className="divisiones flex flex-col justify-start items-center m-[10px] rounded-lg">
                <h2 className="text-[#ca1b1e]  px-3 py-2 rounded-xl m-[10px] text-[10px] sm:text-[16px] cursor-pointer border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white">
                  CAT. PRO
                </h2>
              </div>
            </div>

            <div className="tablas text-[10px] sm:text-[16px] col-span-7 row-span-1 h-auto flex flex-cols flex-wrap  justify-center items-center sm:justify-start bggris rounded-lg ">
              <h2
                className={`text-[#ca1b1e] px-3 py-2 rounded-xl m-[10px] cursor-pointer border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white ${
                  tablaActiva === "pilotos"
                    ? "bg-gradient-to-t from-[#000000] to-[#373737] text-white"
                    : ""
                }`}
                onClick={() => manejarClicEnTabla("pilotos")}
              >
                Campeonato Pilotos
              </h2>
              <h2
                className={`text-[#ca1b1e] px-3 py-2 rounded-lg m-[10px] cursor-pointer border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white ${
                  tablaActiva === "constructores"
                    ? "bg-gradient-to-t from-[#000000] to-[#373737] text-white"
                    : ""
                }`}
                onClick={() => manejarClicEnTabla("constructores")}
              >
                Campeonato Constructores
              </h2>
            </div>

            <div className="tabla  rounded-lg  sm:row-span-5 sm:col-span-7 flex justify-center items-center bggris">
              <div
                className={`tabla row-span-5 col-span-7 w-[90%] h-[80%] sm:h-[100%] flex justify-center items-center bggris ${
                  tablaActiva === "pilotos" ? "" : "hidden"
                }`}
              >
                <table className=" pilotos w-[100%] md:w-[90%] h-[80%] ">
                  <thead>
                    <tr>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[9px] sm:text-[16px] bg-[#ca1b1e]">Posicion</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[9px] sm:text-[16px] bg-[#ca1b1e]">Piloto</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[9px] sm:text-[16px] bg-[#ca1b1e]">Escuderia</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[9px] sm:text-[16px] bg-[#ca1b1e]">Puntos</th>
                    </tr>
                  </thead>

                  <tbody className="w-[50%] h-[50px] border-collapse ">
                    <tr className="text-center border-b-[1px] border-[#848484] flex flex-row justify-center items-center text-[8px] sm:text-[16px]" />
                    {pilotos.map((piloto, index) => (
                      <tr
                        key={index}
                        className="text-center border-b-[1px] border-[#848484] text-[8px] sm:text-[16px]"
                      >
                        <td>{index + 1}</td>
                        <td>{piloto.IDjuego}</td>
                        <td className="flex justify-center items-center ">
                          <img className="md:mr-2  flex justify-center items-center hidden sm:flex text-[10px]" src={piloto.escuderiaimg} />{" "}
                          {piloto.escuderia}
                        </td>
                        <td>{piloto.puntos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className={`tabla row-span-5 col-span-7 flex w-[90%] h-[80%] justify-center items-center bggris ${
                  tablaActiva === "constructores" ? "" : "hidden"
                }`}
              >
                <table className=" constructores w-[90%] h-[80%] border-collapse ">
                  <thead>
                    <tr >
                      <th className="text-center border-b-[1px] border-[#848484] text-[16px] bg-[#ca1b1e]">Posicion</th>
                      <th className="text-center border-b-[1px] border-[#848484] text-[16px] bg-[#ca1b1e]">Escuderia</th>
                      <th className="text-center border-b-[1px] border-[#848484] text-[16px] bg-[#ca1b1e]">Puntos</th>
                    </tr>
                  </thead>

                  <tbody className="w-[50%] h-[50px] border-collapse ">

                  <tr className="text-center border-b-[1px] border-[#848484]  text-[8px] sm:text-[16px]" />
                    {escuderias.map((escuderia, index) => (
                      <tr
                        key={index}
                        className="text-center border-b-[1px] border-[#848484] text-[8px] sm:text-[16px]"
                      >
                        <td>{index + 1}</td>
                        
                        <td className="flex justify-center items-center ">
                          <img className="md:mr-2  flex justify-center items-center hidden sm:flex text-[10px]" src={escuderia.escuderiaimg} />{" "}
                        {escuderia.escuderia}
                         </td>
                        <td>{escuderia.puntos}</td>
                      </tr>
                      ))}


                  
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tablaposiciones;
