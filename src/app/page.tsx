'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Movies from '../component/Movies/Movies'
const inter = Inter({ subsets: ['latin'] })
import { ROUTES } from '../utils/routes';
import { useEffect, useState } from 'react';
import { moviesData } from '../mockdata/moviesData';
export default function Home() {
  
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    const getTreadingMovies = async () =>{
    //   const options = {
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    //     }
    // }
    // const response:any = await fetch(ROUTES.fetchTrendingMovies, options);
    // const data = await response.json()
    // console.log("Treading Movies", response)
    // console.log("data:", data)
    const data = moviesData.trendingMovies || []
    setMovies(data)
    }

    getTreadingMovies()
  }, [])
  
  return (
    <div>
    <h1 className='text-4xl text-white text-center mt-4'>Movie App</h1>
    <Movies movies={movies} title="Treading Movies"/>
    </div>
  )
}
