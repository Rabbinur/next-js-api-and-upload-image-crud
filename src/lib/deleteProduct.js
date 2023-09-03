"use client";

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
  //   console.log(props.id);
  const router = useRouter();
  const deleteItem = async () => {
    let response = await fetch(
      "http://localhost:3000/api/products/" + props.id,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Product deleted successfully");
      router.push("/productlis");
    }
  };
  return <button onClick={deleteItem}>Delete</button>;
}
