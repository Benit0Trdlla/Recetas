import Image from "next/image"
export default function HomePage() {
  return (
    <>
      <div className="container mt-3 mt-lg-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 px-1 lh-lg">
            <p className="text-center text-white fs-5">
              ¡Bienvenido! Aquí encontrarás una comunidad apasionada por la cocina, donde compartimos recetas fáciles para todos los gustos.
            </p>
            <p className="text-center text-white fs-5">
              ¡Explora, cocina y saborea!
            </p>
          </div>
          <div className="col-md-6 row">
            <Image className="img-fluid " src='/HomePage.webp' width={800} height={800} alt='Imagen Principal' />
          </div>
        </div>
        <div id="recetas" className="container py-5 mt-2">
          <div className="text-center">
            <h2 className="mb-2 mt-3 text-white fw-bold">Recetas populares</h2>
            <hr className="w-25 mx-auto border-2 border-white" />
          </div>
          <div className="row" >
            <div className="col-md-3 mb-3">
              <div className="card border border-white">
                <div className="card-body text-center bg-dark">
                  <i className="fa-regular fa-heart fa-2x my-3"></i>
                  <h5 className="card-title text-white">Pollo al disco</h5>
                  <a className="" data-bs-toggle="modal" data-bs-target='#test'><strong>Más Información.</strong></a>
                  {/* Modal */}
                  <div className="modal fade" id='test' aria-labelledby="ModalJustify" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">test</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-black">
                          <p className='mt-3'>
                            test txt
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}