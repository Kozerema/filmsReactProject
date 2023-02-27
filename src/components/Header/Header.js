import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {useTheme} from "../../hooks/useTheme";
import {moviesActions} from "../../redux";
import './Header.css'


const Header = () => {
    const {theme, setTheme} = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }

    const handleDarkThemeClick = () => {
        setTheme('dark')
    }


    const dispatch = useDispatch();
    const [term, setTerm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
        dispatch(moviesActions.getSearch(term));
        setTerm("");

    };


    return (
        <div className={"header"}>
            <Link to={'/'}>
                <div className={'logo'}><img className={"header_icon"}
                                             src={"https://cdn-icons-png.flaticon.com/512/4221/4221419.png"}
                                             alt={'film_icon'}/>
                </div>
            </Link>

            <div className={'search-bar'}>
                <form onSubmit={submitHandler}>
                    <input type={'text'} value={term} placeholder={'Search Movies'}
                           onChange={(e) => setTerm(e.target.value)}/>

                    <button type={'submit'}><i className={'fa-fa-search'}>find</i></button>
                </form>
            </div>

            <div>
                <button className={'button-header'} onClick={handleLightThemeClick}>Light</button>
            </div>

            <div>
                <button className={'button-header'} onClick={handleDarkThemeClick}>Dark</button>
            </div>

            <div className={"user_image"}>
                <img src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt={'user'}/>
            </div>


        </div>
    );
};

export {Header};
