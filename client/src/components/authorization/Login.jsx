import React, { useState } from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import { login } from '../../actions/user';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Login = () => {

    // ggg@mail.ru = 123456
    // test3@gmail.com = test3

    const [email, setEmail] = useState("test4@gmail.com")
    const [password, setPassword] = useState("test4")
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