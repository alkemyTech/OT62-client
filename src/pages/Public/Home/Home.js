import React, { useEffect, useState } from "react";
import ApiCall from '../../../shared/APICalls';
import image from "../../../images/image-2.png";
import Slider from '../../../Components/Slides/Slider';
import DataList from "../../../Components/DataList/DataList";
import LastDataLayout from "../../../Components/LastDataLayout/LastDataLayout";
import Button from "../../../Components/Buttons/Buttons";
import Loader from "../../../Components/Loader/Loader";

const Home = () => {
  const [organization, setOrganization] = useState({});
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrganization = async () => {
      try {
        const res = await ApiCall.get('/organization');
        setOrganization(res.data.data);
      } catch (error) {
        setOrganization(
          {
            organization: {
              welcomeText: 'Vaya, parece que no se han podido recuperar algunos datos'
            },
            members: [],
            testimonials: []
          }
        )
      }
    }

    const getNews = async () => {
      try {
        const res = await ApiCall.get('/news');
        const recortedNews = res.data.allNews.slice(0, 2)
        setNews(recortedNews)
      } catch (error) {
        setNews([])
      } finally {
        setTimeout(function () {
          setLoading(false)
        }, 1000);
      }
    }
    getOrganization();
    getNews();
  }, []);


  return (
    <div className="flex flex-col items-center w-screen">
      {JSON.stringify(organization) !== '{}' ? (
        <>
          <div className="p-12 lg:mx-28 w-full">
            <div className="flex flex-col-reverse md:grid grid-cols-2 gap-6 justify-center">
              <div className="flex flex-col justify-between gap-4 m-auto">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-start mb-6">Hola! Bienvenidx</h1>
                  <p className="w-6/7 mr-auto ml-auto md:ml-0">{organization.organization.welcomeText}</p>
                </div>
                <Button route='/contacts' buttonName='Contactanos' styles='formButton' />
              </div>
              <img className="w-96 h-60  sm:w-full sm:h-80 md:w-full md:h-80 rounded-2xl m-auto object-cover" src={image} alt="Roberto Martinez" />
            </div>
          </div>

          <Slider />

          <LastDataLayout route='/members' title='Nuestro staff'>
            <DataList data={organization.members} loading={loading} type='member' title='miembros' />
          </LastDataLayout>

          <LastDataLayout route='/testimonials' title='Ultimos testimonios'>
            <DataList data={organization.testimonials} loading={loading} type='testimonial' title='testimonios' />
          </LastDataLayout>

          <LastDataLayout route='/news' title='Ultimas novedades'>
            <DataList data={news} loading={loading} type='new' title='novedades' />
          </LastDataLayout>
        </>
      ) : (
        <Loader />
      )
      }
    </div>
  )
};


export default Home;
