import React, { Component } from 'react'
import MovieItem from '../component/MovieItem'
import HeaderSlide from '../component/HeaderSlide'

class MovieList extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <HeaderSlide />
                <MovieItem data={{ name: '十二女汉', crew: "likang", year: 2019, desc: '好电影'}}/>
            </div>
        )
    }
}

export default MovieList
