import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import Home from "./Home/Home";
import News from './News/News';
import Contacts from './Contacts/Contacts';
import Nosotros from './Nosotros/Nosotros';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import NewsDetail from '../../Components/News/NewsDetail';
import ActivityDetail from "../../Components/Activities/ActivityDetail";
import Activities from './Activities/Activities'

const Public = () => {
    return (
        <>
<<<<<<< HEAD
            {/* Header */}
            <Routes>
                <Route path="/" element={<h1>Public Routes</h1>} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/actividades/:id" element={<ActivityDetail />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/nosotros' element={<Nosotros />} />
            </Routes>
            {/* Footer */}
=======
            <Header />
                <div className="flex flex-grow h-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/:id" element={<NewsDetail />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/activities/:id" element={<ActivityDetail />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/nosotros' element={<Nosotros />} />
                        <Route path="/login-user" element={<Login />} />
                        <Route path="/register-user" element={<SignUp />} />
                    </Routes>
                </div>
            <Footer />
>>>>>>> dev
        </>
    );
};

export default Public;