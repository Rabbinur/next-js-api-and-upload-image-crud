"use client";

import { useEffect, useState } from "react";

export default function UpdatePage({ params }) {
  let id = params.userId;
  console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  //get old data from api
  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/` + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  //update user details
  const updateUser = async () => {
    console.log(name, age, email, id);
    let result = await fetch(`http://localhost:3000/api/users/` + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("user updated successfully");
    } else {
      alert("user updated failed please try with valid input");
    }
  };
  return (
    <div className="text-center">
      <h1>user details update</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        className="my-2 border"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="age"
        value={age}
        className="my-2 border"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={email}
        className="my-2 border"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button className="my-2 border" onClick={updateUser}>
        update
      </button>
    </div>
  );
}
