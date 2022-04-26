import Head from "next/head";
import s from "../../styles/Home.module.css";
import Navigation from "../../components/navigation";

interface Users {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface userProps {
  user: Users;
}

function UserDetail(props: userProps) {
  const { user } = props;
  console.log(user);
  return (
    <div className={s.container}>
      <Head>
        <title>Next JS | Dynamic Routes</title>
      </Head>
      <div className={s.main}>
        <h1 className={s.title}>Hi !, {user.name}</h1>
        <p>
          The value of the user below is from routes url after user &rarr;{" "}
          <code className={s.code}>user/ID</code>
        </p>
        <div className={s.grid}>
          <div
            className={s.cardBox}
            style={{ flexDirection: "row", flexWrap: "wrap" }}
          >
            <div className={s.card}>
              <h1>Email :</h1>
              <p>{user.email}</p>
            </div>
            <div className={s.card}>
              <h1>Phone :</h1>
              <p>{user.phone}</p>
            </div>
            <div className={s.card}>
              <h1>Website :</h1>
              <p>{user.website}</p>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

// const res =  fetch("https://jsonplaceholder.typicode.com/users");
// const data = res.json();

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user: Users) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

interface getStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: getStaticProps) {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();
  return {
    props: {
      user: user,
    },
  };
}

export default UserDetail;
