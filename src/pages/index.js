import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "@/Components/Molecules/Nav";

import FechasCalendario from "@/Components/Molecules/FechasCalendario";
import Principal from "@/Components/Molecules/Principal";
import Footer from "@/Components/Molecules/Footer";
import Categorieslist from "@/Components/Molecules/Categorieslist";
import FormularioInscripcion from "@/Components/Atoms/FormularioInscripcion";
import Tablaposiciones from "@/Components/Atoms/Tablaposiciones";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Superliga Sim Racing</title>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/LXzbLSPJ/ssrlogovectorizado1.png"
        />
      </Head>
      <Nav />
      <Principal />
      {/* <Categorieslist /> */}
      <Tablaposiciones />
      <FechasCalendario/>
      <section
        id="inscripcion"
        className="h-[100vh] w-full flex  justify-center items-center bginscripcion bg-cover object-cover bg-no-repeat bg-center"
      >
        <FormularioInscripcion />
      </section>
      <Footer />

    </>
  );
}
