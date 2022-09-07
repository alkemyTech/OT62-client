import React, { useState } from "react";

const RegisterUserForm = () => {
  const [userData, setUserData] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
   
    console.log(userData);
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData.name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={userData.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="name"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="name"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default RegisterUserForm;
