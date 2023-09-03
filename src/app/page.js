import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/productlis " className="tex-red-500 underline">
        Products
      </Link>{" "}
      <br />
      <Link href="/addproduct " className="tex-red-500 underline">
        Add products
      </Link>
      <div className="max-w-screen-2xl mx-auto px-5 md:px-0 py-20">
        <div>
          <h1 className="text-2xl py-2 text-center font-bold">My Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
            <div className="col-span-2 flex justify-center items-center ">
              <img
                src="https://imgv3.fotor.com/images/gallery/Realistic-Female-Profile-Picture.jpg"
                alt=""
                className="w-72 rounded-xl"
              />
            </div>
            <div className="col-span-3">
              <h1 className="font-bold text-center md:text-start">
                Profile Details
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3  gap-10 py-3">
                <div>
                  <h2 className="font-bold">Name </h2>
                  <p className="pt-2">Mst. Cuty pie</p>
                </div>
                <div>
                  <h2 className="font-bold">
                    Email{" "}
                    <span className=" border-l text-blue-500 pl-1">
                      {" "}
                      Change
                    </span>
                  </h2>
                  <p className="pt-2">Cutiepie@gmail.com</p>
                </div>
                <div>
                  <h2 className="font-bold">
                    Contact No{" "}
                    <span className=" border-l text-blue-500 pl-1">
                      {" "}
                      Change
                    </span>
                  </h2>
                  <p className="pt-2">0168558230</p>
                </div>
                <div>
                  <h2 className="font-bold">
                    Address{" "}
                    <span className=" border-l text-blue-500 pl-1">
                      {" "}
                      Change
                    </span>
                  </h2>
                  <p className="pt-2">Mirpur-2</p>
                </div>
                <div>
                  <h2 className="font-bold">
                    gender
                    <span className=" border-l text-blue-500 pl-1">
                      {" "}
                      Change
                    </span>
                  </h2>
                  <p className="pt-2">Male</p>
                </div>
              </div>
              <div className="flex flex-col md:justify-start md:items-start items-center pt-10">
                <button className="px-10 py-2 bg-blue-600 text-white">
                  Edit Profile
                </button>
                <button className="px-11 py-2 my-2 bg-blue-600 text-white">
                  Password
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center font-bold text-2xl">My Order list</h1>
            <div className="py-2">
              <h3>
                Order <span className="text-blue-500">#65231458953313</span>
              </h3>
              <small>Placed on 23 Jan 2022 23:01:29</small>
              <hr />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="flex justify-center">
                <img
                  src="https://static-01.daraz.com.bd/p/mdc/f272da6b16515eeeedc1d749dcf29e3b.jpg"
                  alt=""
                  className="w-32 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-2 md:my-0">
                <div>
                  <h1 className="font-bold pb-1">Product Name</h1>
                  <p>Chair back Support</p>
                </div>
                <div>
                  <h1 className="font-bold pb-1">Price</h1>
                  <p>500 Taka</p>
                </div>
                <div>
                  <h1 className="font-bold pb-1">Quantity</h1>
                  <p>01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
