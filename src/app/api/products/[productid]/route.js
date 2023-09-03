import { connectionSrt } from "@/lib/dbconnection";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//update
export async function PUT(request, content) {
  console.log(content);
  const productId = content.params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  console.log(payload);
  await mongoose.connect(connectionSrt);

  const result = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

//find single id
export async function GET(request, content) {
  console.log(content);
  const productId = content.params.productid;
  const record = { _id: productId };
  // const payload = await request.json();
  // console.log(payload);
  await mongoose.connect(connectionSrt);

  const result = await Product.findById(record);
  return NextResponse.json({ result, success: true });
}

//delete id

export async function DELETE(request, content) {
  const productId = content.params.productid;
  const record = { _id: productId };
  await mongoose.connect(connectionSrt);
  //delete product
  const result = await Product.deleteOne(record);
  return NextResponse.json({ result, success: true });
}
