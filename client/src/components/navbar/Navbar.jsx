import React from 'react';
import './navbar.scss'
import Logo from '../../assets/img/navbar-logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/userReducer';


const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo" />
                <div className="navbar__header"><Link to={'/'}>MERN CLOUD</Link></div>
                {!isAuth &&
                    <div className="navbar__login">
                        <NavLink to="/login">Войти</NavLink>
                    </div>
                }
                {!isAuth &&
                    <div className="navbar__registration">
                        <NavLink to="/registration">Регистрация</NavLink>
                    </div>
                }
                {isAuth &&
                    <div className="navbar__login" onClick={() => dispatch(logout())}><NavLink to="/">Выход</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;