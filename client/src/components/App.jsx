import React, { useEffect } from 'react';
import Navbar from "./navbar/Navbar";
import './globalStyles.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main/Main';
import { auth } from '../actions/user';



function App() {

    const isAuth = useSelector(state => state.user.isAuth)

    // * отключил функцию проверки пользователя, был ли он уже зареген, потому что CORS выдает ошибку и не пропускает далее. Искал способы решения, но пока не нашел - починил? 2024-06-30
    const dispatch = useDispatch()    
    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <div className="wrap">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="login" element={<Login />} />
                            <Route path="registration" element={<Registration />} />
                            <Route path="*" element={<Main />} />
                        </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;