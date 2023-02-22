const baseURL='http://www.themoviedb.org'

const movies=`https://api.themoviedb.org/3/discover/movie`

const images=`https://image.tmdb.org/t/p/w500`

const urls={
    movies:{
        movies,
        ById:(movie_id)=>`/${movie_id}`

    },
    images:{
        ById:(poster_path)=>`/${poster_path}`
        // ById:(movie_id)=>`/${movie_id}/${images}`
    }
}

export {
    baseURL,
    urls
}