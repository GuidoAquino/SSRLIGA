import React from "react";
import data from "../../../db.json";
import { useState } from "react";

const Tablaposiciones = () => {
  const [tablaActiva, setTablaActiva] = useState("pilotos");

  const manejarClicEnTabla = (nombreTabla) => {
    setTablaActiva(nombreTabla);
  };

  const pilotos = [...data.pilotos];

  pilotos.sort((a, b) => b.puntos - a.puntos);
  return (
    <>
      <div id="posiciones">
        <div className="tablasposiciones  flex justify-center items-center w-[100%] h-screen bgposiciones bg-cover bg-no-repeat">
          <div className="posiciones  text-white w-[80%] h-[80%] grid grid-rows-12 grid-cols-8  gap-3   ">
            <div className="ligas  col-span-1 row-span-6  flex flex-col justify-start items-center bggris  ">
              <div className="divisiones flex flex-col justify-start items-center m-[10px] ">
                <h2 className="text-[#ca1b1e]  px-3 py-2 rounded-xl m-[10px] cursor-pointer border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white">
                  CAT. PRO
                </h2>
              </div>
            </div>

            <div className="tablas  col-span-7 row-span-1  flex  justify-start items-center bggris ">
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
                className={`text-[#ca1b1e] px-3 py-2 rounded-xl m-[10px] cursor-pointer border-2 border-[#ca1b1e] hover:border-0 hover:bg-gradient-to-t from-[#000000] to-[#373737] hover:text-white ${
                  tablaActiva === "constructores"
                    ? "bg-gradient-to-t from-[#000000] to-[#373737] text-white"
                    : ""
                }`}
                onClick={() => manejarClicEnTabla("constructores")}
              >
                Campeonato Constructores
              </h2>
            </div>

            <div className="tabla    row-span-5 col-span-7 flex justify-center items-center bggris">
              <div
                className={`tabla row-span-5 col-span-7 w-[90%] h-[80%] flex justify-center items-center bggris ${
                  tablaActiva === "pilotos" ? "" : "hidden"
                }`}
              >
                <table className=" pilotos w-[90%] h-[80%] ">
                  <thead>
                    <tr>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[16px] bg-[#ca1b1e]">Posicion</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[16px] bg-[#ca1b1e]">Piloto</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[16px] bg-[#ca1b1e]">Escuderia</th>
                      <th className="text-center border-b-[1px] border-[#848484]  text-[16px] bg-[#ca1b1e]">Puntos</th>
                    </tr>
                  </thead>

                  <tbody className="w-[50%] h-[50px] border-collapse ">
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]" />
                    {pilotos.map((piloto, index) => (
                      <tr
                        key={index}
                        className="text-center border-b-[1px] border-[#848484] text-[16px]"
                      >
                        <td>{index + 1}</td>
                        <td>{piloto.nombreyapellido}</td>
                        <td className="flex justify-center items-center ">
                          <img className="mr-2" src={piloto.escuderiaimg} />{" "}
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
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>1</td>
                      <td> Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>2</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>3</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>4</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>5</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>6</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>7</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>8</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>9</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
                    <tr className="text-center border-b-[1px] border-[#848484]  text-[16px]">
                      <td>10</td>
                      <td>Ferrari</td>
                      <td>150</td>
                    </tr>
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
