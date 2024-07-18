import React, { useState } from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import { login } from '../../actions/user';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("ggg@mail.ru")
    const [password, setPassword] = useState("123456")
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <form className='authorization'>
            <div className='authorization__header'>Авторизация</div>
            <Input
                value={email}
                setValue={setEmail}
                type="text"
                placeholder="Введите email..."
            />
            <Input
                value={password}
                setValue={setPassword}                
                type="password"
                placeholder="Введите пароль..."                
            />
            <button type='submit'
                className='authorization__btn'
                onClick={onClickHandler}
            ><NavLink to={'/'}>Войти</NavLink></button>
        </form>
    );
};

export default Login;