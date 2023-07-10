import React from 'react'
import Movie from "./Movie"



const Movies = ({movies, title}) => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
                {
                    movies?.map((movie, id) =>(
                        <Movie name={movie.title} key={id} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Movies;