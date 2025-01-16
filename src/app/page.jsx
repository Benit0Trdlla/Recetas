import Image from "next/image"
import Navbar from "./components/Navbar";
import RecetaCardHome from "./components/Home/RecetaCard";
import db from "@/libs/db";

export default async function HomePage() {
  const recetas = await db.receta.findMany({ take: 4 });

  return (
    <>
      <Navbar />
      <div className="container mt-3 mt-lg-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 px-1 lh-lg">
            <p className="text-center text-white fs-5">
              ¡Bienvenido! Aquí encontrarás una comunidad apasionada por la cocina, donde compartimos recetas fáciles para todos los gustos.
            </p>
            <p className="text-center text-white fs-5">
              ¡Explora, cocina y saborea!
            </p>
          </div>
          <div className="col-md-6 row">
            <Image className="img-fluid " src='/HomePage.webp' width={800} height={800} alt='Imagen Principal' />
          </div>
        </div>
        <div id="recetas" className="container py-5 mt-2">
          <div className="text-center">
            <h2 className="mb-2 mt-3 text-white fw-bold">Recetas populares</h2>
            <hr className="w-25 mx-auto border-2 border-white" />
          </div>
          <div className="row">
            <RecetaCardHome recetas={recetas} />
          </div>
        </div>
      </div>
    </>
  )
}