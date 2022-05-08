import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
//Components
import Navigation from "../components/navigation";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <p style={{ marginBottom: "0px", opacity: "0.8" }}>26 April 2022</p>
            <h1 className={styles.title} style={{ textAlign: "left" }}>
              Welcome to <a href="">Home!</a>
            </h1>
            <div className={styles.detail}>
              <p className={styles.name}>Hi, i{`'`}m Muhamad Fihris Aldama </p>
              <p className={styles.info}>
                This is my learning progress, still learning the several basic
                of{" "}
                <span className={styles.under}>
                  <a href="https://nextjs.org/" target="blank">
                    Next.js
                  </a>
                </span>{" "}
                Technologies. I make this when I have free time between college
                activities
              </p>
            </div>
          </div>
          <Image src="/hero.svg" alt="Hero" width={400} height={400} />
        </div>

        <Navigation />
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
          <p style={{ color: "#303030" }}>
            © Copyright 2022 - Muhamad Fihris Aldama
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
