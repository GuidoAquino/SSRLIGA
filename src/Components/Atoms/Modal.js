import React, { useState } from 'react'


const Modal = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    return (
    
    <>
       
       
        <button onClick={()=> setIsOpen(true)}>Ver Restultado GP</button>
        {
            isOpen &&(
                <div className=' flex flex-col justify-center items-center absolute bottom-[-52px] rounded-t-md h-[402px] w-[252px]'>
            <img src="https://i.postimg.cc/gkGXkbtX/859a6a68-1f39-4946-b1ac-76dc31ef76de.jpg" className=' h-full  rounded-t-md object-fit'  alt="" />  
            <div className='w-[252px]'>
            
            <button  className='bg-[#ca1b1e] text-white  w-full rounded-b-md' onClick={()=> setIsOpen(false)}>Cerrar </button>
            </div>
        </div>
            )
        }
        
    </>
  )
}

export default Modal
