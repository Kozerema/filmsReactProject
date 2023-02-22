const baseURL='https://www.themoviedb.org'

const movies='/3/discover/movie?page=2'


const urls={
    movies:{
        movies,
        ById:(movie_id)=>`${movies}/${movie_id}`
    }
}

export {
    baseURL,
    urls
}