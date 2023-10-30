import data from "../../../db.json"
import Image from "next/image";
import React from "react";
import { Modal } from "@mui/material";



const Calendario = () => {

  const calendario = [...data.calendario];
  return (
    <>
    {calendario.map((fecha, index) => (
    
      <div  id="calendario" key={index} className="w-[180px] h-[300px] flex-cols flex-wrap items-center justify-center  border-2 border-white flex rounded-lg  "  >
        <div className="flex  flex-cols flex-wrap items-center justify-center " >
          <span className="m-[10px] text-white  flex w-[50px]">R {index + 1}</span>
          <img src={fecha.bandera} alt="" className="h-[70px] w-[70px] object-fit "/>
        </div>
        <div className="flex flex-col justify-center items-center text-white rounded-lg">
          <h5 className="text-white text-bold text-center"> {fecha.circuito}</h5>
          <span>{fecha.fecha}</span>
          <span>{fecha.horario} </span>
          <span className="text-red-500 mb-2">Sprint {fecha.sprint} </span>
          <span><a href="#" className='hover:text-[#ca1b1e] hover:border-b-2 hover:border-[#ca1b1e]  ' >Resultados GP</a></span>
        </div>
      </div>
      ))}
    </>
  );
};

export default Calendario;
