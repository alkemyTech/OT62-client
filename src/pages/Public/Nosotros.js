import React from "react";
import member1 from "../../images/member-1.png";

const Nosotros = () => {
  const members = [
    { id: "1", name: "Julian Fernandez", image: member1 },
    { id: "2", name: "Julian Fernandez", image: member1 },
    { id: "3", name: "Julian Fernandez", image: member1 },
    { id: "4", name: "Julian Fernandez", image: member1 },
    { id: "5", name: "Julian Fernandez", image: member1 },
    { id: "6", name: "Julian Fernandez", image: member1 },
    { id: "7", name: "Julian Fernandez", image: member1 },
    { id: "8", name: "Julian Fernandez", image: member1 },
    { id: "9", name: "Julian Fernandez", image: member1 },
    { id: "10", name: "Julian Fernandez", image: member1 },
  ];
  return (
    <div className="w-10/12 my-7 mx-auto pb-16">
      <h1 className="text-3xl font-semibold text-center">¡Nuestro Staff!</h1>
      <div className="flex flex-col-reverse md:flex-row my-14 gap-6">
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-center md:text-start">
              Roberto Martinez
            </h1>
            <h3 className="text-2xl mt-4">Rol que desempeña</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore
            tempora omnis amet. Beatae, placeat similique iusto eos nihil
            temporibus, qui vel aliquam voluptates animi blanditiis natus ab
            quidem perferendis! Neque ab iusto eveniet hic suscipit eius
            aspernatur cumque. Nostrum tempore itaque qui impedit assumenda at
            praesentium quo consequuntur dolorum dolores earum sapiente
            exercitationem dolore, nemo debitis quae optio porro!
          </p>
          <button className="self-start py-1.5 px-3 rounded-xl font-semibold	text-white bg-red-700">
            ¡Quiero ser parte!
          </button>
        </div>
        <img
          className="w-44 h-48 sm:w-56 sm:h-60 md:w-72 md:h-80 mx-auto"
          src={member1}
          alt="Roberto Martinez"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 gap-4">
        {members.map((member) => (
          <div
            className="flex flex-row relative rounded-md justify-center"
            key={member.id}
          >
            <img
              className="w-40 h-40 object-cover"
              src={member.image}
              alt={member.name}
            />
            <p className="absolute bottom-3 text-white">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Nosotros;
