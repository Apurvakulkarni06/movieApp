import React from 'react'
import Movie from "./Movie"



const Movies = ({movies, title}) => {

    return (
        <div className="bg-white">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className='grid grid-cols-3 gap-4'>
                {
                    movies?.map((movie, id) =>(
                        <Movie name={movie.title} backdrop_path={movie.backdrop_path} rating={movie.vote_average} date={movie.release_date} overview={movie.overview} key={id} />
                    ))
                }
                </div>
                
            </div>
        </div>
    )
}

export default Movies;