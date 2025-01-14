import { createRecetas } from "@/actions/receta-actions";

export default function CrearRecetaModal() {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link text-white" data-bs-toggle="modal" data-bs-target='#Modalreceta'><strong>Crear Receta</strong></a>
            </li>
            {/* Modal */}
            <div className="modal fade" id='Modalreceta' aria-labelledby="ModalJustify" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Crea tu receta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-black">
                            <form action={createRecetas} className="container d-flex justify-content-center align-items-center flex-column">
                                <div className="form-floating mb-3 w-100">
                                    <input type="text" name="title"
                                        className="form-control" id="floatingTitleInput" />
                                    <label htmlFor="title">Titulo</label>
                                </div>
                                {/* {errors.email && <span className="text-danger fw-bold fs-6 mb-3">{errors.email.message}</span>} */}

                                <div className="form-floating mb-3 w-100">
                                    <input type="text" name="ingredientes"
                                        className="form-control" id="floatingIngredientes" />
                                    <label htmlFor="ingredientes">Ingredientes</label>
                                </div>
                                {/* {errors.password && <span className="text-danger fw-bold fs-6 mb-3">{errors.password.message}</span>} */}

                                <div className="form-floating mb-3 w-100">
                                    <textarea className="form-control" name="descripcion" id="floatingTextarea"></textarea>
                                    <label htmlFor="descripcion">Descripción</label>
                                </div>

                                <div className="form-floating mb-3 w-100">
                                    <input type="file" className="form-control" id="inputImage" name="imagen"/>
                                    <label htmlFor="imagen">Foto de tu receta</label>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary text-white">Crear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}