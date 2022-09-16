

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Public from "./pages/Public/Public.js";
import Backoffice from "./pages/Backoffice/Backoffice.js";
import Contacts from "./pages/Public/Contacts.js";
import Nosotros from "./pages/Public/Nosotros.js";


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/create-activity" element={<ActivitiesForm />} />
          <Route path="/create-category" element={<CategoriesForm />} />
          <Route path="/create-news" element={<NewsForm />} />
          <Route path="/backoffice/create-slide" element={<SlidesForm />} />
          <Route path="/create-testimonials" element={<TestimonialForm />} />
          <Route path="/create-user" element={<UserForm />} />
          <Route path="/register-user" element={<SignUp />} />
          <Route path="/login-user" element={<Login />} />
          <Route path="/create-member" element={<MembersForm />} />
          <Route path="/create-project" element={<ProjectsForm />} />
          <Route path="/school-campaign" element={<SchoolCampaign />} />
          <Route path="/toys-campaign" element={<ToysCampaign />} />
          <Route path="/" element={<Public />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/backoffice/" element={<Backoffice />} />

          <Route path='/*' element={<Public />}/>
          <Route path='/backoffice/*' element={<Backoffice />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
