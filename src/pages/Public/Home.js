import React from "react";
import image from "../../images/image-2.png";
import member1 from "../../images/member-1.png";
import novedad1 from '../../images/novedad-1.png'
import Slider from '../../Components/Slides/Slider'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const members = [
    { id: "1", name: "Julian Fernandez", image: member1 },
    { id: "2", name: "Julian Fernandez", image: member1 },
    { id: "3", name: "Julian Fernandez", image: member1 },
    { id: "4", name: "Julian Fernandez", image: member1 },
    { id: "5", name: "Julian Fernandez", image: member1 },
  ];
  const testimonials = [
    {
      id: "1",
      name: "Nombre y Apellido",
      image: member1,
      content:
        "adawdawd hil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "2",
      name: "Nombre y Apellido",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "3",
      name: "Nombre y Apellido",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "4",
      name: "Nombre y Apellido",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "5",
      name: "Nombre y Apellido",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
  ];
  const news = [
    {
      id: "1",
      img: novedad1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
    {
      id: "2",
      img: novedad1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
    {
      id: "3",
      img: novedad1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
    {
      id: "4",
      img: novedad1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
  ];
  return (
    <div>
      <div className="w-10/12 my-7 mx-auto pb-8">
        <div className="flex flex-col md:flex-row my-14 gap-6">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-start mb-6">
                Hola! Bienvenidx
              </h1>
              <p className="w-6/7 mr-auto ml-auto md:ml-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dolore tempora omnis amet. Beatae, placeat similique iusto eos
                nihil temporibus, qui vel aliquam voluptates animi blanditiis
                natus ab quidem perferendis! Neque ab iusto eveniet hic suscipit
                eius aspernatur cumque. Nostrum tempore itaque qui impedit
                assumenda at praesentium quo consequuntur dolorum dolores earum
              </p>
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
      <div className="w-10/12 mx-auto my-8">
        <div className="sm:flex justify-between">
          <h2 className="text-2xl font-bold">Nuestro Staff</h2>
          <button onClick={() => navigate('/nosotros')} className="text-sm text-gray-500 my-2">Ver todos &gt;</button>
        </div>
        <div className="my-6 grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 gap-4">
          {members.map((member) => (
            <div
              className="flex flex-row relative justify-center"
              key={member.id}
            >
              <img
                className="w-40 h-40 object-cover rounded-2xl"
                src={member.image}
                alt={member.name}
              />
              <p className="absolute bottom-3 text-white">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* TESTIMONIOS */}
      <div className="w-10/12 mx-auto mb-8">
        <div className="sm:flex justify-between">
          <h2 className="text-2xl font-bold">Testimonios</h2>
          <button onClick={() => navigate('/testimonials')} className="text-sm text-gray-500 my-2">Ver todos &gt;</button>
        </div>
        <div className="my-6 grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 gap-4">
          {testimonials.map((member) => (
            <div
              className="mx-auto flex w-11/12 items-center sm:items-start sm:w-full flex-col p-4 rounded-2xl bg-yellow-200 border border-yellow-300 h-52"
              key={member.id}
            >
              <img
                className="w-16 h-16 object-cover rounded-[50%]"
                src={member.image}
                alt={member.name}
              />
              <p className="font-bold text-center sm:text-start">
                {member.name}
              </p>
              <p className="text-sm max-h-20 text-center sm:text-start overflow-hidden">
                {member.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* NOVEDADES */}
      <div className="w-10/12 mx-auto mb-8">
        <div className="sm:flex justify-between">
          <h2 className="text-2xl font-bold">Últimas Novedades</h2>
          <button onClick={() => navigate('/news')} className="text-sm text-gray-500 my-2">Ver todos &gt;</button>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 h-fit gap-4 lg:gap-8 my-6">
          {news.map((news) => (
            <div key={news.id} className="mx-auto flex-col sm:flex sm:flex-row h-fit gap-6 bg-blue-300 p-5 w-full h-60 rounded-2xl">
              {/* <div> */}
              <img
                className="rounded-2xl h-36 w-36 lg:h-48 lg:w-48 mx-auto object-contain"
                src={news.img}
                alt="Novedad"
              />
              {/* </div> */}
              <div className="flex gap-4 flex-col justify-between w-full">
                <p className="mt-4 sm:mt-0 text-left h-24 overflow-hidden font-sm">{news.content}</p>
                <button onClick={() => navigate(`/news/${news.id}`)} className="bg-blue-600 rounded-lg text-white h-9 shadow-xl hover:bg-blue-800">
                  Ver novedad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
