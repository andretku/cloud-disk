import React, { useState } from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onClickHandler = (e) => {
        e.preventDefault()
        registration(email, password)
    }

    return (
        <form className='authorization'>
            <div className='authorization__header'>Регистрация</div>
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
            >Зарегистрироваться</button>
        </form>
    );
};

export default Registration;