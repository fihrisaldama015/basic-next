/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Head from "next/head";
import Navigation from "../components/navigation";
import s from "../styles/Home.module.css";

function Images() {
  return (
    <div className={s.container}>
      <Head>
        <title>Nextx JS | Image Optimization</title>
      </Head>
      <h1 className={s.title}>Image Optimization</h1>
      <div className={s.main}>
        <h1>Optimized Image</h1>
        <div className={s.cardBox}>
          <Image src="/QRIS.jpeg" width={200} height={300} alt="QRIS Image" />
          <Image
            src="/wallpaper.jpg"
            width={600}
            height={300}
            alt="Wallpaper Win 11"
          />
        </div>
        <h1>RAW Image</h1>
        <div className={s.cardBox}>
          <img src="/QRIS.jpeg" width={200} height={300} alt="QRIS Image" />
          <img
            src="/wallpaper.jpg"
            width={600}
            height={300}
            alt="Wallpaper Win 11"
          />
        </div>

        <Navigation />
      </div>
    </div>
  );
}

export default Images;
