"use client";

import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const adduser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("User added successfully");
    } else {
      alert("User not found");
    }
    // console.log(name, age, email);
    console.log(response);
  };
  return (
    <div className="text-center py-10">
      <h1>Add new users</h1>
      <input
        type="text"
        name=""
        id=""
        value={name}
        placeholder="enter name"
        className="border"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        name=""
        id=""
        value={age}
        placeholder="enter age"
        className="border my-2"
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <br />
      <input
        type="email"
        name=""
        id=""
        value={email}
        placeholder="enter email"
        className="border my-2"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <button onClick={adduser} className="bg-blue-200 p-2">
        {" "}
        add user{" "}
      </button>
    </div>
  );
}
