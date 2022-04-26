import s from "../../styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Navigation from "../../components/navigation";
// import { useRouter } from "next/router";

interface userProps {
  user: User;
}

interface User {
  [key: number]: { name: string };
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

function User(props: userProps) {
  const [ID, setID] = useState<number | string>(0);
  const [name, setName] = useState("");
  const { user } = props;
  // const Router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setID(parseInt(e.target.value));
  };

  // const handleSubmit = (e) => {
  //   Router.push({ pathname: `/user/${ID}`, query: { id: ID } });
  //   Router.push(`/user/${ID}`, "/user/1", { shallow: true });
  // };

  useEffect(() => {
    try {
      let numID = parseInt(ID as unknown as string, 10);
      const username = user[numID - 1].name;
      setName(username);
    } catch (err) {
      setName("");
    }
  }, [ID, user]);

  return (
    <div className={s.container}>
      <Head>
        <title>Next JS | User</title>
      </Head>
      <div className={s.main}>
        <h1 className={s.title}>Dynamic Routes</h1>
        <p>
          <b>Hi !</b>, lets try this Dynamic Routes with fill the number below
        </p>
        <div className={s.cardBox}>
          <p>
            Click <code className={s.code}>GO</code> to see <b>user detail</b>{" "}
            Pages !
          </p>
          <form>
            <div>
              <input
                type="number"
                className={s.input}
                placeholder="User ID"
                onChange={handleChange}
                value={ID !== 0 ? ID : ""}
              />
              <button className={s.submit} disabled={name == ""}>
                <Link href={`/user/${ID}`}>Go</Link>
              </button>
            </div>
            <p>Username that has the ID &darr;&darr;</p>
            <h1>{name}</h1>
          </form>
          <Link href="/staticFetch" passHref>
            <div className={s.title}>
              <a style={{ fontSize: "1.5rem" }}>Go to All User Data Page</a>
            </div>
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
}

export default User;
