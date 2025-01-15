import EliminarReceta from "./EliminarReceta"
import BtnCompartir from "./BtnCompartir"
import Link from "next/link"

export default function RecetaCard({ receta }) {
    return (
        <div className="col-12 col-md-3 mb-5" key={receta.id_receta}>
            <div className="card vh-50">
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
                <div className="card-body d-flex gap-1">
                    <EliminarReceta recetaId={receta.id_receta} />
                    <Link href={`/recetas/${receta.id_receta}/edit`} className="btn btn-primary">Editar Receta</Link>
                    <BtnCompartir recetaId={receta.id_receta} />
                </div>
            </div>
        </div>
    )
}