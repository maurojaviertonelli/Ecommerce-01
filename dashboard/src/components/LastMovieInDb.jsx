import React from 'react';

function LastMovieInDb(){

    return(
        <div className="col-6 card shadow mb-4 p-0 me-3">
            <h3 className="card-header m-0 font-weight-bold text-gray-800 "></h3>
            <div className="container card-body">
                <img src="http://localhost:3000/Public/img/logo%20internerd.png" alt="Imagen de película" className="img-fluid px-3 px-sm-4 mt-3 mb-4 "/>
                <p></p>
                <a href="/" target="_blank" className="btn btn-danger">Detalle Productos</a>
            </div>
        </div>
    )
}

export default LastMovieInDb;