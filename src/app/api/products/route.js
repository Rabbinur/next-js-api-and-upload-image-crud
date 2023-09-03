import { connectionSrt } from "@/lib/dbconnection";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//data get korar jnne
// export async function GET() {
//   let data = [];
//   try {
//     await mongoose.connect(connectionSrt);
//     data = await Product.find();
//     console.log(data);
//   } catch (err) {
//     data = success.false;
//   }
//   return NextResponse.json({ result: data, success: true });
// }
//data get korar jnne
export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
    console.log(data);
  } catch (err) {
    data = { result: "error" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

// post method for data uplaod

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result: result, success: true });
}
