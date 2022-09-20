import React, { useEffect, useState } from "react";
import membersAPI from '../../../shared/APICalls';
import MemberCard from '../../../Components/Cards/Card';
import member1 from "../../../images/member-1.png";

const Nosotros = () => {
  const [ members, setMembers ] = useState([]);
  
  useEffect(() => {
    const getMembers = async () => {
      const res = await membersAPI.get('/members')
      setMembers(res.data.data)
    }
    getMembers();
  }, []);

  if(JSON.stringify(members) === '[]') {
    return <p>Error</p>
  } else {
    return (
      <div className="w-10/12 my-7 mx-auto pb-16">
        <h1 className="text-3xl font-semibold text-center">¡Nuestro Staff!</h1>
        <div className="flex flex-col-reverse md:flex-row my-14 gap-6">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-center md:text-start">{members[0].name}</h1>
              <h3 className="text-2xl mt-4">{members[0].rol}</h3>
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
            className="rounded-2xl w-44 h-44 sm:w-56 sm:h-60 md:w-72 md:h-72 mx-auto"
            src={members[0].image}
            alt={members[0].name}
          />
        </div>
        <div className="flex flex-wrap gap-4 w-full justify-center">
          {members.map((member) => (
            <MemberCard element={member} title='member'/>
          ))}
        </div>
      </div>
    );
  }
};
export default Nosotros;
