import Link from "next/link";
import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";

interface PreactStarsProps {
  stars: number;
  network: number;
}

function PreactStars(props: PreactStarsProps) {
  const { stars, network } = props;
  return (
    <div>
      <Head>
        <title>Next JS | Preact</title>
      </Head>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <h1 className={Styles.title}>Fetch Method 2</h1>
          <p>Classic Function & Async Await method &darr;</p>
          <div className={Styles.cardBox}>
            <h1>
              Preact has <b className={Styles.num}>{stars}</b> ⭐
            </h1>
            <h1>Preact has {network} network count</h1>
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
  const json = await res.json();

  return {
    props: {
      stars: json.stargazers_count,
      network: json.network_count,
    },
  };
}

export default PreactStars;
