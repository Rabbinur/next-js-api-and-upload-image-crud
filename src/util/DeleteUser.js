"use client";
export default function Page(props) {
  const userid = props.id;
  console.log(userid);
  const deleteUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userid, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      alert("user is deleted successfully");
    }
  };
  return <button onClick={deleteUser}>Delete</button>;
}
