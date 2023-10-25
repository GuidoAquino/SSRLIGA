import React from "react";
/*PSEUDO QUOETES*/
const Categories = (props) => {



  return (
    <>
      <div className="categoria bggris h-[400px] w-[280px] rounded-xl m-3 hover:scale-105 transition ">
        <div className="nombreliga h-[20%] w-[100%] flex justify-center items-center">
          <span className="text-[#f7c562] text-2xl">{props.data.categoria}</span>
        </div>
        <div className="detalles text-[#f7c562] h-[60%] w-[100%] flex flex-col justify-center items-center ">
          <span>
            <li>{props.data.dia} {props.data.horario} Arg</li>
          </span>
          <span>
            <li>{props.data.ayudas}</li>
          </span>
          <span>
            <li>Qualy {props.data.qualy}</li>
          </span>
          <span>
            <li>Carrera {props.data.carrera}</li>
          </span>
        </div>
        <div className="boton h-[20%] w-[100%] flex justify-center items-center ">
          <button className="text-[#3d3d3d] bg-[#f7c562] p-3 rounded-xl hover:bggris hover:text-[#3d3d3d]white hover:border-2 hover:border-[#f7c562] ">
            Ver Posiciones
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
