import React from "react";
import image from "../../images/image-2.png";
import member1 from "../../images/member-1.png";

const Home = () => {
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
      name: "Julian Fernandez",
      image: member1,
      content:
        "adawdawd hil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "2",
      name: "Julian Fernandez",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "3",
      name: "Julian Fernandez",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "4",
      name: "Julian Fernandez",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
    {
      id: "5",
      name: "Julian Fernandez",
      image: member1,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dignissimos in molestiae cumque aliquam rerum eligendi sapiente corporis! Eius eligendi nihil laudantium quaerat itaque, perferendis voluptate magnam dolor quam provident",
    },
  ];
  const news = [
    {
      id: "1",
      img: image,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
    {
      id: "2",
      img: image,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi et sed ullam numquam odio corporis magni quam, in minus quas vero dolores, omnis ipsa fugiat saepe aperiam nesciunt recusandae qui suscipit nobis explicabo excepturi voluptatibus unde laboriosam. Earum, quisquam deserunt?",
    },
  ];
  return (
    <div>
      <div className="w-10/12 my-7 mx-auto pb-16">
        <div className="flex flex-col md:flex-row my-14 gap-6">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-start mb-6">
                Hola! Bienvenidx
              </h1>
              <p className="w-5/6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dolore tempora omnis amet. Beatae, placeat similique iusto eos
                nihil temporibus, qui vel aliquam voluptates animi blanditiis
                natus ab quidem perferendis! Neque ab iusto eveniet hic suscipit
                eius aspernatur cumque. Nostrum tempore itaque qui impedit
                assumenda at praesentium quo consequuntur dolorum dolores earum
                sapiente exercitationem dolore, nemo debitis quae optio porro!
              </p>
            </div>
            <button className="self-start py-2 px-5 rounded-xl font-semibold text-white bg-red-600">
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
    </div>
  );
};

export default Home;
