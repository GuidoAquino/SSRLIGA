import data from "../../../db.json"

import React from "react";
import Modal from "./Modal";




const Calendario = () => {
  


  const calendario = [...data.calendario];
  return (
    <>
    {calendario.map((fecha, index) => (
    
      <div  id="calendario" key={index} className="  w-[250px] h-[400px] flex-cols flex-wrap items-center justify-center  border-2 border-white flex rounded-lg  "  >
        <div className="flex  flex-cols flex-wrap items-center justify-center " >
          <span className="m-[10px] text-white  flex w-[50px]">R {index + 1}</span>
          <img src={fecha.bandera} alt="" className="h-[70px] w-[70px] object-fit "/>
        </div>
        <div className="flex flex-col justify-center items-center text-white rounded-lg relative">
          <h5 className="text-white text-bold text-center"> {fecha.circuito}</h5>
          <span>{fecha.fecha}</span>
          <span>{fecha.horario} </span>
          <span className="text-red-500 mb-2">Sprint {fecha.sprint} </span>
          <Modal />
                 
          
        </div>
      </div>
      ))}
    </>
  );
};

export default Calendario;
