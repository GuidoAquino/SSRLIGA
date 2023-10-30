import React from 'react'
import Calendario from '../Atoms/Calendario'

const FechasCalendario = () => {
  return (
    <>
       
    <section  className='h-auto flex flex-col justify-center items-center  bggris  bg-no-repeat bg-cover bg-center '>
    <h2 className='mb-5  text-[16px] text-white sm:text-3xl mt-3'>Calendario T13</h2>
    <div className='gap-2 pb-3 grid grid-rows-12 grid-cols-1 md:grid-rows-4 md:grid-cols-3  flex-cols flex-wrap items-center justify-center  sm:grid-rows-6 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-6'>
    <Calendario/>
  
   
  
    
    </div>
     </section>
 
    </>

  )
}

export default FechasCalendario
