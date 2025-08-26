import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Footer from './components/footer';
import Header from "./components/header";

export default function Home() {
  return (
    <div className={styles.page}>
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
        <div className={styles.contentheading}>
          <h2 className={styles.title}>Our Bestsellers</h2>
        </div>
        <div className={styles.productgrid}>
          <div className={styles.productcard}>
            <Image src="/images/sneakers.png" width={387} height={388} alt="Sneakers" />
            <div className={styles.addtocartsection}>
              <div className={styles.addtocartprice}>
                <Link href="#" className={styles.productname} >Sneakers</Link>
                <span>$59.00 USD</span>
              </div>
              <button className={styles.addtocartbtn}>Add to cart</button>
            </div>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/running.png" width={387} height={388} alt="Running Shoes" />
            <div className={styles.addtocartsection}>
              <div className={styles.addtocartprice}>
                <Link href="#" className={styles.productname} >Running Shoes</Link>
                <span>$69.00 USD</span>
              </div>
              <button className={styles.addtocartbtn}>Add to cart</button>
            </div>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/oxfords.png" width={387} height={388} alt="Oxfords" />
            <div className={styles.addtocartsection}>
              <div className={styles.addtocartprice}>
                <Link href="#" className={styles.productname} >Oxfords shoes</Link>
                <span>$120.00 USD</span>
              </div>
              <button className={styles.addtocartbtn}>Add to cart</button>
            </div>
          </div>
          <div className={styles.productcard}>
            <Image src="/images/boat.png" width={387} height={388} alt="Boat Shoes" />
            <div className={styles.addtocartsection}>
              <div className={styles.addtocartprice}>
                <Link href="#" className={styles.productname} >Boat Shoes</Link>
                <span>$99.00 USD</span>
              </div>
              <button className={styles.addtocartbtn}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.gendersection}>
        <div className={styles.gendercard}>
          <Image src="/images/women.png" width={960} height={627} alt="Women Shoes" />
          <div className={styles.overlay}>
            <h3 className={styles.title}>For Women</h3>
            <a href="#" className={styles.btn}>Shop women</a>
          </div>
        </div>
        <div className={styles.gendercard}>
          <Image src="/images/men.jpg" width={960} height={627} alt="Men Shoes" />
          <div className={styles.overlay}>
            <h3 className={styles.title}>For Men</h3>
            <a href="#" className={styles.btn}>Shop men</a>
          </div>
        </div>
      </section>


      <section className={styles.categories}>
        <h2>Shop by Category</h2>
        <div className={styles.categorygrid}>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/sneakers.png" alt="" /><p>Sneakers</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/leather.png" alt="" /><p>Leather Boots</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/snow.png" alt="" /><p>Snow Boots</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/running.png" alt="" /><p>Running Shoes</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/loafers.png" alt="" /><p>Loafers</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/oxfords.png" alt="" /><p>Oxfords shoes</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/sports.png" alt="" /><p>Sports Shoes</p><span>$59.00 USD</span></div>
          <div className={styles.productcard}><Image width={387} height={388} src="/images/formal.png" alt="" /><p>Formal Shoes</p><span>$59.00 USD</span></div>
        </div>
      </section>


      <section className={styles.features}>
        <div className={styles.feature}>🚚 Free Delivery</div>
        <div className={styles.feature}>🔄 Easy return policy</div>
        <div className={styles.feature}>📞 24/7 Support</div>
      </section>


      <section className={styles.promo}>
        <div className={styles.promoimg}>
          <Image width={1920} height={800} src="/images/promo.png" alt="Promo Shoes" />
        </div>
      </section>     
    </div>
  );
}