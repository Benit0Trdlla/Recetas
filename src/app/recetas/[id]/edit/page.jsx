import db from "@/libs/db";
import { redirect } from "next/navigation";
import { editarReceta } from "@/actions/receta-actions";
export default async function EditarRecetaPage({ params }) {
    // Los params son asincronos
    const { id } = await params
    const receta = await db.receta.findUnique({
        where: {
            id_receta: parseInt(id)
        }
    })
    if (!receta) redirect('/404');


    return (
        <form className="container d-flex justify-content-center align-items-center vh-50 flex flex-column" action={editarReceta}>
            <h1 className="text-white fw-bold mt-3">Edita tu receta</h1>
            <input type="hidden" name="id" value={id} />
            <div className="form-floating mb-3 w-50">
                <input type="text" name="title" defaultValue={receta.titulo}
                    className="form-control" id="floatingTitleInput" />
                <label htmlFor="title">Titulo</label>
            </div>

            <div className="form-floating mb-3 w-50">
                <input type="text" name="ingredientes" defaultValue={receta.ingredientes}
                    className="form-control" id="floatingIngredientes" />
                <label htmlFor="ingredientes">Ingredientes</label>
            </div>


            <div className="form-floating mb-3 w-50">
                <textarea className="form-control" name="descripcion" id="floatingTextarea" defaultValue={receta.descripcion}></textarea>
                <label htmlFor="descripcion">Descripción</label>
            </div>

            <div className="form-floating mb-3 w-50">
                <input type="file" className="form-control" id="inputImage" name="imagen" />
                <label htmlFor="imagen">Foto de tu receta</label>
            </div>

            <button type="submit" className="btn btn-primary text-white">Guardar cambios</button>
        </form>
    )
}