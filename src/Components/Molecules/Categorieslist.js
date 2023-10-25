import { useEffect, useState } from "react";
import Categories from "./Categories";

const categoriaInicial = {
  id:"",
  categoria: "Liga A",
  ayudas: "",
  dia: "",
  horario: "",
  carrera: "",
  qualy: "",
};

const Categorieslist = () => {
  const [liga, setliga] = useState(categoriaInicial);

  const updateLiga = async () => {
    const ENDPOINT = "http://localhost:5000/categorias";
    // const response = await fetch(ENDPOINT);
    const [nuevaLiga] = await response.json();
    const {id, categoria, ayudas, dia, horario, carrera, qualy} = nuevaLiga;

    setliga({
      id: id,
      categoria: categoria,
      ayudas: ayudas,
      dia: dia,
      horario: horario,
      carrera: carrera,
      qualy: qualy,
    })
  };

  useEffect(() => {
    updateLiga();
  }, [])

  return (
    <>
      <section className="min-h-[60vh] flex flex-col items-center justify-center w-full bgcategories bg-cover bg-fixed object-cover bg-center relative">
        <h2 className="text-[#f7c562] text-4xl md:text-5xl m-3">
          Categorias LAF
        </h2>
        <div className="cat flex flex-col md:flex-row mt-5">

      {/* {
        liga.map(ligas => <Categories key={ligas.id} />)
      } */}
        
        {/* <Categories data={liga}/> */}
          
        
          
        </div>
      </section>
    </>
  );
};

export default Categorieslist;
