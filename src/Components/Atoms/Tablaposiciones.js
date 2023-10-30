import React from "react";
import data from "../../../db.json";
import { useState } from "react";

const Tablaposiciones = () => {
  const [tablaActiva, setTablaActiva] = useState("pilotos");

  const manejarClicEnTabla = (nombreTabla) => {
    setTablaActiva(nombreTabla);
  };

  const pilotos = [...data.pilotos];
  const escuderias = [...data.escuderias];

  pilotos.sort((a, b) => b.puntos - a.puntos);
  escuderias.sort((a, b) => (b.piloto1puntos + b.piloto2puntos) - (a.piloto1puntos + a.piloto2puntos));
  return (
    <>
      <div id="posiciones ">
        <div className="tablasposiciones  flex justify-center items-center w-[100%] md:h-auto min-h-[120vh] py-[10px]  bgposiciones bg-cover bg-no-repeat   ">
          <div className="posiciones  text-white md:w-[80%] w-[95%] h-[80%]  mb-3 sm:grid grid-rows-12 sm:grid-cols-6  sm:gap-3  rounded-lg   ">
           
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
                <table className=" pilotos w-[200%] md:w-[90%] h-[80%] table-caption md:table mt-[10px] overflow-scroll">
                  <thead >
                    <tr>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Posición
                      </th>
                      <th className="text-start border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Piloto
                      </th>
                      
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Puntos
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Podios
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Pole
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        V.R.
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                      P.C.
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                      Eventos
                      </th>
                    </tr>
                  </thead>

                  <tbody className="w-[50%] h-[50px] border-collapse    ">
                    <tr className="text-center  flex flex-row justify-center items-center text-[8px] sm:text-[16px]" />
                    {pilotos.map((piloto, index) => (
                      <tr
                        key={index}
                        className="text-center border-b-[1px] border-[#848484] text-[8px] sm:text-[16px]"
                      >
                        <td>{index + 1}</td>
                        <td className="flex flex-row flex-wrap justify-start items-center ">
                          <img
                            className="md:mr-2 scale-[1.7]   flex-row justify-center items-center hidden md:flex "
                            src={piloto.escuderiaimg } 
                          />
                          <div
                            className="flex
                        flex-col justify-center items-start text-[10px] sm:text-[16px]"
                          >
                            {piloto.IDjuego} <br />{" "}
                            <span className="text-[10px] p-0 m-0">
                              {piloto.escuderia}
                            </span>
                          </div>
                        </td>

                        <td className="flex justify-center items-center "></td>
                        <td>{piloto.puntos}</td>
                        <td >
                        
                       <span className="text-yellow-300 mr-1 border-2 border-stone-600 px-2 m-2 h-full ">{piloto.primeraposicion}</span>
                       <span className="text-stone-300 mr-1 border-2 border-stone-600 px-2 m-2 h-full">{piloto.segundaposicion}</span>
                       <span className="text-yellow-600 mr-1 border-2 border-stone-600 px-2 m-2 h-full">{piloto.terceraposicion}</span>
                        
                        </td>
                        <td><span className="text-yellow-white mr-1 border-2 border-stone-600 px-2  h-full">{piloto.pole}</span></td>
                        <td><span className="text-violet-500 mr-1 border-2 border-stone-600 px-2  h-full">{piloto.vueltarapida}</span></td>
                        <td><span className="text-white mr-1 border-2 border-stone-600 px-2  h-full">{piloto.puntoscarnet}</span></td>
                        <td><span className="text-white mr-1 border-2 border-stone-600 px-2  h-full">{piloto.eventos}</span></td>
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
                <table className=" constructores w-[200%] md:w-[90%] h-[80%] table-caption md:table mt-[10px] overflow-scroll">
                  <thead>
                    <tr>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Posición
                      </th>
                      <th className="text-start pl-1 border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Escuderia
                      </th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[7px] sm:text-[12px] md:text-[16px]  bg-[#ca1b1e]">
                        Puntos
                      </th>
                    </tr>
                  </thead>

                  <tbody className="w-[50%] h-[50px] border-collapse    ">
                    <tr className="text-center  flex flex-row justify-center items-center text-[8px] sm:text-[16px]" />
                    {escuderias.map((escuderias, index) => (
                      <tr
                        key={index}
                        className="text-center border-b-[1px] border-[#848484] text-[8px] sm:text-[16px]"
                      >
                        <td>{index + 1}</td>
                        <td className="flex flex-row flex-wrap justify-start items-center ">
                          <img
                            className="md:mr-2 scale-[1.7]   flex-row justify-center items-center hidden md:flex "
                            src={escuderias.escuderiaimg } 
                          />
                          <div
                            className="flex
                        flex-col justify-center items-start text-[10px] sm:text-[16px]"
                          >
                            {escuderias.escuderia} <br />{" "}
                            <span className="text-[8px] sm:text-[10px] p-0 m-0">
                              {escuderias.piloto1} / {escuderias.piloto2}
                            </span>
                          </div>
                        </td>

                        <td className="flex justify-center items-center "></td>
                        <td><span className="text-[8px] sm:text-[16px]">{escuderias.piloto1puntos + escuderias.piloto2puntos}</span> </td>
                        
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
