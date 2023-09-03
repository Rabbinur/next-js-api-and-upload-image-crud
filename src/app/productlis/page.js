import DeleteProduct from "@/lib/deleteProduct";
import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function ProductPage() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h2>All products list</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>price</td>
            <td>category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <Link href={"/productlis/" + product._id}>Edit</Link>
                  <DeleteProduct id={product._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
