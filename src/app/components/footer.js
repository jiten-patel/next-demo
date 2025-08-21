import styles from "../page.module.css";


export default function Footer(){
    return(
        <footer className={styles.footer}>
        <div className={styles.footertop}>
          <div className={styles.footerabout}>
            <h3>Stepozo</h3>
            <p>Step into style and comfort with Stepozo, where every stride tells a story. From sleek sneakers to sophisticated loafers, we offer a curated collection to elevate your footwear game.</p>
            <div className={styles.footernewsletter}>
            <h4>Get the latest offers</h4>

            <button className={styles.btn}>Send</button>
          </div>
          </div>
          <div className={styles.footerlinks}>
            <h4>Pages</h4>
            <ul><li><a href="#">Home</a></li><li><a href="#">Men</a></li><li><a href="#">Women</a></li><li><a href="#">Shop</a></li><li><a href="#">Sale</a></li></ul>
          </div>
          <div className={styles.footersupport}>
            <h4>Support</h4>
            <ul><li><a href="#">About Us</a></li><li><a href="#">Contact</a></li><li><a href="#">FAQ</a></li></ul>
          </div>
          <div className={styles.socials}>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <p>© 2025 Stepozo. Powered by Stepozo.org</p>
          
        </div>
      </footer>
    );
}