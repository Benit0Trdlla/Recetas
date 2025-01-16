import db from "@/libs/db";
import BtnCompartir from "@/app/components/Dashboard/BtnCompartir";

export default async function RecetaPage({ params }) {
    const { id } = await params
    const receta = await db.receta.findUnique({
        where: {
            id_receta: parseInt(id)
        }
    })
    const userData = await db.usuario.findUnique({
        where: {
            id_usuario: receta.id_usuario
        }, select: {
            nombre: true
        }
    })

    return (
        <>
            <div className="container mt-3">
                <h1 className="fw-bold fst-italic fs-1 text-white">{receta.titulo}</h1>
                <hr className=" text-white" />
                <p className="text-white fw-semibold fs-5 lh-lg">{receta.descripcion}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-secondary mb-0">Receta creada por: {userData.nombre} </p>
                    <div className=" d-flex align-items-center gap-2 mb-1">
                        <span className="text-white">Compartir:</span>
                        <BtnCompartir recetaId={receta.id_receta} />
                    </div>
                </div>
                <hr className=" text-white mt-0" />
                <h4 className="text-white fw-semibold mb-3">Ingredientes para tu receta:</h4>
                <ol className="list-group list-group-numbered">
                    {receta.ingredientes.split(',').map((ingrediente, index) => (
                        <li className="list-group-item text-white colors-list-ingredientes" key={index}>{ingrediente}</li>
                    ))}
                </ol>
                {receta.imagen && (
                    <>
                        <h4 className="text-white fw-semibold mt-3">Resultado</h4>
                        <div className="d-flex justify-content-center">
                            <img src={receta.imagen} className="img-fluid img-receta-resultado rounded-3 mt-3 mb-lg-4" alt={receta.titulo} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}