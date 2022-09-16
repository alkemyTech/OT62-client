import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import Home from "./Home/Home";
import News from './News/News';
import Contacts from './Contacts/Contacts';
import Nosotros from './Nosotros/Nosotros';
import Login from './Login/Login.container';
import SignUp from './SignUp/Signup.container';
import NewsDetail from '../../Components/News/NewsDetail';
import ActivityDetail from "../../Components/Activities/ActivityDetail";

const Public = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/actividades/:id" element={<ActivityDetail />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path="/login-user" element={<Login />} />
                <Route path="/register-user" element={<SignUp />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Public;