import React, { PureComponent } from 'react'
class MovieItem extends PureComponent{
    render(){
        let { poster, name, crew, year, desc } = this.props.data
        return (
            <div className="movie-item">
                <div className="movie-poster" style={{backgroundImage: `url(${poster})`}}></div>
                <div className="movie-info">
                    <h3 className="movie-name">{name}</h3>
                    <span className="movie-year">{year}年</span>
                    <div className="movie-crew">{crew}</div>
                    <p className="movie-desc">{desc}</p>
                </div>
            </div>
        )
    }
}

export default MovieItem
