import db from "@/libs/db";
import { revalidatePath } from "next/cache";
export default function EliminarReceta({recetaId}) {
    async function eliminarReceta(formData) {
        'use server'
        const recetaId = formData.get('recetaId').toString();
        console.log('ELIMINAR', recetaId);
        
        if (!recetaId) return;

        await db.receta.delete({ where: { id_receta: parseInt(recetaId) } });

        revalidatePath('/dashboard');
    }
    return (
        <form action={eliminarReceta}>
            <input type="hidden" name='recetaId' value={recetaId} />
            <button className="btn btn-danger">Eliminar</button>
        </form>
    )
}