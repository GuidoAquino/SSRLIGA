// 

import React, { useState } from 'react';

const Modal = ({ resultado }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Ver Resultado GP</button>
      {isOpen && (
        <div className='flex flex-col justify-center items-center absolute bottom-[-52px] rounded-t-md h-[402px] w-[252px]'>
          <img src={resultado} className=" h-[402px] rounded-t-md"alt="Resultado GP" /> 
          <div className='w-[252px]'>
            <button className='bg-[#ca1b1e] text-white w-full rounded-b-md' onClick={() => setIsOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
