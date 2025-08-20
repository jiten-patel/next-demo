import Image from "next/image";
import styles from "../page.module.css";
import Link from 'next/link';

export default function About() {
  return (
   <div className={styles.page} >
      <main className={styles.main}>
        <h1>About us</h1>
        <div className={styles.ctas}><Link className={styles.primary} href='/'>Home</Link></div>
      </main>
    </div>
  );
}