import styles from "../page.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Header(){
    return(
        <header>
        <div className={styles.topbar}>Free shipping on all orders over $50</div>
        <nav className={styles.navbar}>
          <div className={styles.logo}><Image src="/Stepozo.png" width={113} height={30} alt="stepozo" /></div>
          <ul className={styles.navlinks}>
            <li><Link href="#">Men</Link></li>
            <li><Link href="#">Women</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">Pages</Link></li>
          </ul>
          <div className={styles.navicon}>
            <span>🔍</span>
            <span>🛒</span>
          </div>
        </nav>
      </header>
    );
}