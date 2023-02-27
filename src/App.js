import {Route, Routes} from "react-router-dom";

import {GenreDetailsPage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";
import './App.css'
import {Header} from "./components";

const App = () => {

    return (
        <div>
            <Header/>
            <div className={"container"}>
                <Routes>

                    <Route index={'/'} element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MovieDetailsPage/>}/>
                    <Route path={'genre/:id'} element={<GenreDetailsPage/>}/>
                    <Route path={'/*'} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
};

export {App};

