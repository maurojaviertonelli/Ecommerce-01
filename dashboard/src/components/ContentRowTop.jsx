import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop() {
    return(
        <div className="container-fluid">
            <h2>Mi Dashboard</h2>
            <ContentRowMovies/>
            <div className="row">
                <LastMovieInDb/>
                <GenresInDb />
            </div>
        </div>
    )
}

export default ContentRowTop;