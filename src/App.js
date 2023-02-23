import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}/>
            <Route index element={<MoviesPage/>}/>
            <Route path={':detailId'} element={<MovieDetailsPage/>}/>
            <Route path={'genre'} element={<GenrePage/>}/>


            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>

    );
};

export {App};

