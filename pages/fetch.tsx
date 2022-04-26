import Link from "next/link";
import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";

function Fetch({ stars }: { stars: number }) {
  return (
    <div>
      <Head>
        <title>Next JS | Data Fetch</title>
      </Head>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <h1 className={Styles.title}>Fetch</h1>
          <h3>
            Source &rarr;{" "}
            <a href="https://github.com/vercel/next.js" className={Styles.code}>
              {"https://github.com/vercel/next.js"}
            </a>
          </h3>
          <p>Arrow function {"&"} Promise method &darr;</p>

          <div className={Styles.cardBox}>
            <h1>
              Next.js has <b className={Styles.num}>{stars}</b> ⭐️
            </h1>
            <Link href="/stars">
              <a className={Styles.underlined}>How about preact?</a>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js").then(
    (data) => data.json()
  );
  return {
    props: {
      stars: res.stargazers_count,
    },
  };
};

export default Fetch;
