// import db from "@/libs/db";
// import { revalidatePath } from "next/cache";
import { eliminarReceta } from "@/actions/receta-actions";

export default function EliminarReceta({recetaId}) {
    return (
        <form action={eliminarReceta}>
            <input type="hidden" name='recetaId' value={recetaId} />
            <button className="btn btn-danger">Eliminar</button>
        </form>
    )
}