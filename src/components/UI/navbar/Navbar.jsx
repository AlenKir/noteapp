import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (e) => {
        e.preventDefault();
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>Logout</MyButton>
            <div className={classes.navbar__links}>
                <Link to="/about">About</Link>
                <Link to="/notes">Notes</Link>
            </div>
        </div>
    );
};

export default Navbar;