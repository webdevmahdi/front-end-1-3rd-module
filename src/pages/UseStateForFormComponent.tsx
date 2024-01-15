import React, { useState } from "react";

const UseStateForForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
  const [user, setUser] = useState({name: '', email: ''});
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleEvent = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log(user)
    const inputField = e.target.name;
    const value = e.target.value;
    setUser({...user, [inputField]: value})
  }
  return (
    <form className="bg-black-200 text-3xl mr-3" onSubmit={handleSubmit}>
      <h1 className="text-4xl text-red-200">Hello</h1>
      <input
        onChange={handleEvent}
        type="text"
        name="name"
        className="border border-3 text-2xl"
        id="name"
      />
      <input
      className="bg-slate-600"
        onChange={handleEvent}
        type="text"
        name="email"
        id="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateForForm;
