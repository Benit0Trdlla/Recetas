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
                            <form className="container d-flex justify-content-center align-items-center flex-column">

                                <div className="form-floating mb-3 w-100">
                                    <input type="text"
                                        className="form-control" id="floatingTitleInput" />
                                    <label htmlFor="title">Titulo</label>
                                </div>
                                {/* {errors.email && <span className="text-danger fw-bold fs-6 mb-3">{errors.email.message}</span>} */}

                                <div className="form-floating mb-3 w-100">
                                    <input type="text"
                                        className="form-control" id="floatingIngredientes" />
                                    <label htmlFor="ingredientes">Ingredientes</label>
                                </div>
                                {/* {errors.password && <span className="text-danger fw-bold fs-6 mb-3">{errors.password.message}</span>} */}

                                <div className="form-floating mb-3 w-100">
                                    <textarea className="form-control" id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea">Descripción</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary text-white">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}