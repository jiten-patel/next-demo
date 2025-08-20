import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <div className={styles.topbar}>Free shipping on all orders over $50</div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Stepozo</div>
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
      <section className={styles.hero}>
        <div className={styles.herotext}>
          <h1>Step into greatness with Stepozo.</h1>
          <p>Experience the freedom of breathable, comfortable shoes designed to take you anywhere you want to go with comfort meets confidence.</p>
          <Link href="#" className={styles.btn} >Explore now</Link>
        </div>
        <div className={styles.heroimg}>
          <Image src="/Banner.png" alt="Shoes" width={1920} height={814} />
        </div>
      </section>
      <section className={styles.bestsellers}>
        <h2>Our Bestsellers</h2>
        <div className={styles.productgrid}>
          <div className={styles.productcard}>
            <Image src="/images/sneakers.png" width={387} height={388} alt="Sneakers" />
            <div className={styles.addtocartsection}>
              <div className={styles.addtocartprice}>
                <p>Sneakers</p>
                <span>$59.00 USD</span>
              </div>
              <button className={styles.addtocartbtn}>Add to cart</button>
            </div>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/running.png" width={387} height={388} alt="Running Shoes" />
            <p>Running Shoes</p>
            <span>$69.00 USD</span>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/oxfords.png" width={387} height={388} alt="Oxfords" />
            <p>Oxfords shoes</p>
            <span>$120.00 USD</span>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/boat.png" width={387} height={388} alt="Boat Shoes" />
            <p>Boat Shoes</p>
            <span>$99.00 USD</span>
          </div>
        </div>
      </section>
    </div>
  );
}
//  <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>