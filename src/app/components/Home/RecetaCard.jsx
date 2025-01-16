import Link from "next/link";
export default function RecetaCardHome({ recetas }) {
    return (
        <>
            {recetas.map((receta) => (
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
            ))
            }
        </>
    )
}