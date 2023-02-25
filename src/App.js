import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";
import './App.css'
import {Header} from "./components";

const App = () => {

    return (
        <div>
            <Header/>
            <div className={"container"}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}/>
                    <Route index={'/'} element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MovieDetailsPage/>}/>

                    <Route path={'genre'} element={<GenrePage/>}/>
                    <Route path={'/*'} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
};

export {App};

