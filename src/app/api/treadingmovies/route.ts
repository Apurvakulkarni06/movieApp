import {ROUTES} from "../../../utils/routes"

export async function GET(request: Request) {
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
        }
    }
    const movies = await fetch(ROUTES.fetchTrendingMovies, options)
    return new Response.json(movies)
}
  