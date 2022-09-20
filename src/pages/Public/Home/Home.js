import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCall from '../../../shared/APICalls';
import Card from '../../../Components/Cards/Card'
import image from "../../../images/image-2.png";
import Slider from '../../../Components/Slides/Slider';

const Home = () => {
  const [ organization, setOrganization ] = useState({});
  const [ news, setNews ] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getOrganization = async () => {
      const res = await ApiCall.get('/organization');
      setOrganization(res.data.data);
    }
    const getNews = async () => {
      const res = await ApiCall.get('/news');
      const recortedNews = res.data.allNews.slice(0, 2)
      setNews(recortedNews)
    }
    getOrganization();
    getNews();
  }, []);

  if(JSON.stringify(organization) === '{}') {
    return <p>error</p>
  } else {
    return (
      <div className="flex flex-col items-center">
        <div className="p-12 lg:mx-28">
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex flex-col justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-start mb-6">
                  Hola! Bienvenidx
                </h1>
                <p className="w-6/7 mr-auto ml-auto md:ml-0">{organization.organization.welcomeText}</p>
              </div>
              <button onClick={() => navigate('/contacts')} className="mx-auto md:mx-0 self-start py-2 px-5 rounded-xl font-semibold text-white bg-red-600">
                Contactanos
              </button>
            </div>
            <img
              className="w-96 h-60  sm:w-96 sm:h-80 md:w-96 md:h-80 mx-auto rounded-2xl"
              src={image}
              alt="Roberto Martinez"
            />
          </div>
        </div>
        <Slider />
        {/* STAFF */}
        <div className="max-w-[1156px] flex flex-col m-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Nuestro Staff</h2>
            <button onClick={() => navigate('/nosotros')} className="text-sm text-gray-500 my-2 font-bold">Ver todos &gt;</button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {organization.members.map((member) => (
              <div className="flex flex-row relative justify-center" key={member.id}>
                <Card element={member} title='member' />
              </div>
            ))}
          </div>
        </div>
        {/* TESTIMONIOS */}
        <div className="max-w-[1156px] flex flex-col m-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Ultimos testimonios</h2>
            <button onClick={() => navigate('/testimonials')} className="text-sm text-gray-500 my-2 font-bold">Ver todos &gt;</button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {organization.testimonials.map((testimonial) => (
              <div className="flex flex-row relative justify-center" key={testimonial.id}>
                <Card element={testimonial} title='testimonial' />
              </div>
            ))}
          </div>
        </div>
        {/* NOVEDADES */}
        <div className="max-w-[1156px] flex flex-col m-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Ultimas novedades</h2>
            <button onClick={() => navigate('/news')} className="text-sm text-gray-500 my-2 font-bold">Ver todos &gt;</button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {news.map((news) => (
              <div className="flex flex-row relative justify-center first:gap-0" key={news.id}>
                <Card element={news} title='new' />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};


export default Home;
