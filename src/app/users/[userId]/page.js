async function getUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  const Userdata = await data.json();
  return Userdata.result;
}

export default async function Page({ params }) {
  console.log(params);
  const user = await getUsers(params.userId);
  console.log(user);
  return (
    <div>
      <h2>User details</h2>
      <h2>Name: {user.name}</h2>
      <h2>Name: {user.id}</h2>
    </div>
  );
}
