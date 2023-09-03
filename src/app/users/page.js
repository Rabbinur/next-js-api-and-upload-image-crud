import Link from "next/link";
import DeleteUser from "@/util/DeleteUser";
async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  const Userdata = await data.json();
  return Userdata;
}

export default async function Page() {
  const users = await getUsers();
  //   console.log(users);
  return (
    <div>
      <h1>user list </h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`users/${user.id}`}> {user.name}</Link>
            <span>
              {" "}
              <Link href={`users/${user.id}/update`}> edit</Link>
            </span>
            <DeleteUser id={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
