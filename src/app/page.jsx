import Image from "next/image"
import db from "@/libs/db";
import Link from "next/link";
export default async function HomePage() {
  // const recetas = await db.receta.findMany({
  //   take: 4, 
  //   select: {
  //     id_receta: true,
  //     titulo: true,
  //     descripcion: true,
  //     imagen: true
  //   }
  // });

  return (
    <>
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
            {/* {recetas.map((receta) => (
              <div className="col-12 col-md-3 mb-3" key={receta.id_receta}>
                <div className="card h-100" style={{ width: '100%' }}>
                  <div className="card-body">
                    <h5 className="card-title">{receta.titulo}</h5>
                    <p className="card-text">{receta.descripcion}</p>
                    <Link href={`/recetas/${receta.id_receta}`} className="card-link">
                      Ver receta completa
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}