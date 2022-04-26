import React from "react";
import Layout, { s } from "../components/layout";

function staticPage(props: { users: Array<any> }) {
  const { users } = props;
  console.log(users);
  const userStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  };
  return (
    <Layout>
      <>
        <h1 className={s.title}>Static Props</h1>
        <div className={s.cardBox} style={userStyles as React.CSSProperties}>
          {users.map((user: any, index: number) => (
            <div key={index}>
              <p>id : {user.id}</p>
              <p>name : {user.name}</p>
              <p>email : {user.email}</p>
            </div>
          ))}
        </div>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      users: dataUsers,
    },
  };
}

export default staticPage;
