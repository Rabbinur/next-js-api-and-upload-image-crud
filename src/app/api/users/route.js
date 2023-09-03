import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export function GET(request) {
//   return NextResponse.json(
//     { name: "anil", age: "25", city: "dhaka" },
//     { status: 200 }
//   );
// }

export function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
//  post function

export async function POST(request) {
  let playload = await request.json();
  // console.log(playload.name);
  if (!playload.name || !playload.age || !playload.email) {
    return NextResponse.json({ result: "error" }, { status: 400 });
  }
  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 200 }
  );
}
