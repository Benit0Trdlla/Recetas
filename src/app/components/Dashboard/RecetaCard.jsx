import EditarRecetaModal from "./EditarRecetaModal"
import EliminarReceta from "./EliminarReceta"

export default function RecetaCard({ receta }) {
    return (
        <div className="card h-100" style={{ width: "18rem" }}>
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
                {receta.id_receta}
                <EliminarReceta recetaId={receta.id_receta} />
                <EditarRecetaModal />
            </div>
        </div>
    )
}