import Link from "next/link";
import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";

interface PreactStarsProps {
  stars: number;
  fork: number;
}

function PreactStars(props: PreactStarsProps) {
  const { stars, fork } = props;
  console.log(stars, fork);
  return (
    <div>
      <Head>
        <title>Next JS | Preact</title>
      </Head>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <h1 className={Styles.title}>Fetch</h1>
          <h3>
            Source &rarr;{" "}
            <a
              href="https://github.com/preactjs/preact"
              className={Styles.code}
            >
              {"https://github.com/preactjs/preact"}
            </a>
          </h3>
          <p>
            Method 2 &rarr; Classic Function {"&"} Async Await method &darr;
          </p>
          <div className={Styles.cardBox}>
            <h1>
              Preact has <b className={Styles.num}>{stars}</b> ⭐
            </h1>
            <h1>
              Forked <b className={Styles.num}>{fork}</b> times
            </h1>
            <div>
              <Link href="/fetch">
                <a className={Styles.underlined}>
                  I bet Next.js fetch has more stars (?)
                </a>
              </Link>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/preactjs/preact");
  const data = await res.json();

  return {
    props: {
      stars: data.stargazers_count,
      fork: data.forks,
    },
  };
}

export default PreactStars;
