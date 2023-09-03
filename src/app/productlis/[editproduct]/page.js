"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log(props.params.editproduct);
    getProdcutDetails();
  }, []);

  //get product by id
  const getProdcutDetails = async () => {
    let productID = props.params.editproduct;
    let productdata = await fetch(
      `http://localhost:3000/api/products/${productID}`
    );
    productdata = await productdata.json();
    if (productdata.success) {
      let result = productdata.result;
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
    }
    console.log(productdata);
  };
  //   update product
  const updateProduct = async () => {
    let productID = props.params.editproduct;
    let data = await fetch(`http://localhost:3000/api/products/${productID}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category }),
    });
    data = await data.json();
    if (data.result) {
      alert("Product updated successfully");
      <Link href="/productlis"></Link>;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>This is update product page</h1>
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
        <button type="submit" onClick={updateProduct}>
          update product
        </button>
      </div>
      <div>
        <Link href="/productlis">Goto PRoduct List</Link>
      </div>
    </div>
  );
}
