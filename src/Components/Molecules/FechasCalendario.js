


import React from 'react'
import Calendario from '../Atoms/Calendario'

const FechasCalendario = () => {
  return (
    <>
       
    <section className='h-[50vh]  flex flex-col justify-center items-center  bgcalendario  bg-no-repeat bg-cover bg-center'>
    <h2 className='mb-5  text-3xl'>Calendario T13</h2>
    <div className='gap-2 grid grid-rows-3 grid-cols-4 '>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
    <Calendario/>
   
  
    
    </div>
     </section>
 
    </>

  )
}

export default FechasCalendario
