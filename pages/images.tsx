/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Head from "next/head";
import Navigation from "../components/navigation";
import s from "../styles/Home.module.css";

function Images() {
  return (
    <div className={s.container}>
      <Head>
        <title>Next JS | Image Optimization</title>
      </Head>
      <div className={s.main}>
        <h1 className={s.title}>Next.js Image Optimization</h1>
        <h1 style={{ color: "red" }}>RAW Image</h1>
        <h3>
          Syntax &rarr;{" "}
          <code className={s.code}>{'<img src="/NAME.jpg" alt="" />'}</code>
        </h3>
        <div className={s.cardBox}>
          <img src="/QRIS.jpeg" width={200} height={300} alt="QRIS Image" />
          <h2>
            Size : <b style={{ color: "red" }}>132 kB</b>
          </h2>
          <img
            src="/wallpaper.jpg"
            width={600}
            height={300}
            alt="Wallpaper Win 11"
          />
          <h2>
            Size : <b style={{ color: "red" }}>520 kB</b>
          </h2>
        </div>
        <h1 style={{ color: "limegreen" }}>Optimized Image</h1>
        <h3>
          Syntax &rarr;{" "}
          <code className={s.code}>{'<Image src="/NAME.jpg" alt="" />'}</code>
        </h3>
        <div className={s.cardBox}>
          <Image src="/QRIS.jpeg" width={200} height={300} alt="QRIS Image" />
          <h2>
            Size : <b style={{ color: "limegreen" }}>18.9 kB</b>
          </h2>
          <Image
            src="/wallpaper.jpg"
            width={600}
            height={300}
            alt="Wallpaper Win 11"
          />
          <h2>
            Size : <b style={{ color: "limegreen" }}>15.4 kB</b>
          </h2>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default Images;
