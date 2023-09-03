"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const addProduct = async () => {
    console.log(name, price, category);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, category }),
    });
    result = await result.json();
    if (result.success) {
      alert("new product successfully added");
      router.push("/productlis");
    } else {
      alert("product is not added successfully");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>This is Add product page</h1>
      <div className=" ">
        <input
          type="text"
          name=""
          className="my-2 border"
          id=""
          placeholder="Enter Your product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name=""
          className="my-2 border"
          id=""
          placeholder="Enter Your product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          name=""
          className="my-2 border"
          id=""
          placeholder="Enter Your product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <button type="submit" onClick={addProduct}>
          add product
        </button>
      </div>
    </div>
  );
}
