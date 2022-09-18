import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import TestimonialsBackoffice from "./Testimonials/TestimonialsBackoffice";
import ContactsBackoffice from './Contacts/ContactsBackoffice'
import NewsBackoffice from "./News/NewsBackoffice";
import ActivitiesBackoffice from "./Activities/ActivitiesBackoffice";

const Private = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col flex-grow justify-center">
                <Routes>
                    <Route path="/" element={<h1>Backoffice</h1>} />
                    <Route path="/testimonials" element={<TestimonialsBackoffice />} />
                    <Route path="/contacts" element={<ContactsBackoffice />} />
                    <Route path="/news" element={<NewsBackoffice />} />
                    <Route path="/activities/*" element={<ActivitiesBackoffice />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default Private;