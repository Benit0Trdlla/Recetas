export default function EditarRecetaModal() {
    return (
        <>
            <button className="btn btn-success text-dark" data-bs-toggle="modal" data-bs-target='#ModalEditReceta'><strong>Editar Receta</strong></button>
            {/* Modal */}
            <div className="modal fade" id='ModalEditReceta' aria-labelledby="ModalJustify" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edita tu receta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-black">
                            <form className="container d-flex justify-content-center align-items-center flex-column">
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
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary text-white">Guardar Cambios</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}