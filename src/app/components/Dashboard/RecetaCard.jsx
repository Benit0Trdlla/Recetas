import EliminarReceta from "./EliminarReceta"
import Link from "next/link"

export default function RecetaCard({ receta }) {
    return (
        <div className="card h-100" style={{ width: "18rem" }}>
            {receta.imagen && (
                <img src={receta.imagen} className="card-img-top img-fluid" style={{ height: "300px", objectFit: "cover", objectPosition: "center" }} alt="..."></img>
            )}
            <div className="card-body">
                <h5 className="card-title">{receta.titulo}</h5>
                <p className="card-text">{receta.descripcion}</p>
            </div>
            <ul className="list-group list-group-flush">
                {receta.ingredientes.split(',').map((ingrediente, index) => (
                    <li className="list-group-item" key={index}>{ingrediente}</li>
                ))}
            </ul>
            <div className="card-body d-flex gap-2">
                <EliminarReceta recetaId={receta.id_receta} />
                <Link href={`/recetas/${receta.id_receta}/edit`} className="btn btn-primary">Editar Receta</Link>
            </div>
        </div>
    )
}