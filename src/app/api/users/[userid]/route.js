import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  //   console.log(content.params.userid);
  const data = user;
  const userdata = data.filter((user) => user.id == content.params.userid);
  // console.log(userdata);
  return NextResponse.json(
    userdata.length == 0
      ? { result: "no data found", success: false }
      : { result: userdata[0], success: true },
    { status: 200 }
  );
}
// put means update

export async function PUT(request, content) {
  let playload = await request.json();
  //get id which u want to update
  // let userid = content.params.userid;
  playload.id = content.params.userid;
  console.log(playload);
  // error returned
  if (!playload.id || !playload.name || !playload.age || !playload.email) {
    return NextResponse.json(
      { result: "request data not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: playload, success: true },
    { status: 200 }
  );
}

// delete a single id

export function DELETE(request, content) {
  let id = content.params.userid;
  if (id) {
    return NextResponse.json(
      { result: "user deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal erro,please try in letter", success: false },
      { status: 400 }
    );
  }
}
