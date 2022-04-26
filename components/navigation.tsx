import Link from "next/link";
import styles from "../styles/Home.module.css";
function Navigation() {
  return (
    <>
      <p className={styles.description}>
        Getting Routes from <code className={styles.code}>pages/</code>
      </p>
      <div className={styles.grid}>
        <Link href="/">
          <a className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Go to Home Page.</p>
          </a>
        </Link>
        <Link href="/fetch">
          <a className={styles.card}>
            <h2>Fetch &rarr;</h2>
            <p>
              Page for API, Fetching Stars count data from github repository.
            </p>
          </a>
        </Link>
        <Link href="/404">
          <a className={styles.card}>
            <h2>404 &rarr;</h2>
            <p>My Custom 404 Page with Redirecting function.</p>
          </a>
        </Link>
        <Link href="/images">
          <a className={styles.card}>
            <h2>Images &rarr;</h2>
            <p>Using Image Optimization in Next JS.</p>
          </a>
        </Link>
        <Link href="/user">
          <a className={styles.card}>
            <h2>User Page &rarr;</h2>
            <p>Using Dynamic Routes in Next JS.</p>
          </a>
        </Link>
        <Link href="/staticFetch">
          <a className={styles.card}>
            <h2>staticProps &rarr;</h2>
            <p>Fetching Static Data with staticProps{"()"} method.</p>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
