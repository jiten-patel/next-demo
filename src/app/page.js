import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className='container-mx-auto'>
      <section className='row'>
        <div className='w-[37%] absolute z-10 top-[40%] left-[110px]'>
          <h1 className="text-black text-5xl font-bold leading-none mb-5">Step into greatness with Stepozo.</h1>
          <p className="text-lg font-medium mb-10">Experience the freedom of breathable, comfortable shoes designed to take you anywhere you want to go with comfort meets confidence.</p>
          <Link href="#" className='bg-white text-black font-bold py-3 px-5 rounded-3xl'>Explore now</Link>
        </div>
        <div className='relative z-0'>
          <Image src="/Banner.png" alt="Shoes" width={1920} height={814} />
        </div>
      </section>
      <section className='row my-20'>
        <div className='align-center text-center mb-10'>
          <h2 className='text-black text-5xl font-bold mb-5'>Our Bestsellers</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-8 lg:px-8'>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
              src="/images/sneakers.png" width={387} height={388} alt="Sneakers" />
            <div className='mt-4 flex justify-between items-center'>
              <Link href="#" className='text-lg font-bold' >{'Sneakers'}</Link>
              <span className="price text-lg font-bold">{'$59.00 USD'}</span>
            </div>
            <Link href='#' className='text-white h-10 w-10 hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <ShoppingCartIcon />
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
              src="/images/running.png" width={387} height={388} alt="Running Shoes" />
            <div className='mt-4 flex justify-between items-center'>
              <Link href="#" className='text-lg font-bold' >{'Running Shoes'}</Link>
              <span className="price text-lg font-bold">{'$69.00 USD'}</span>
            </div>
            <Link href='#' className='text-white h-10 w-10 hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <ShoppingCartIcon />
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
              src="/images/oxfords.png" width={387} height={388} alt="Oxfords" />
            <div className='mt-4 flex justify-between items-center'>
              <Link href="#" className='text-lg font-bold' >{'Oxfords shoes'}</Link>
              <span className="price text-lg font-bold">{'$120.00 USD'}</span>
            </div>
            <Link href='#' className='text-white h-10 w-10 hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <ShoppingCartIcon />
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
              src="/images/boat.png" width={387} height={388} alt="Boat Shoes" />
            <div className='mt-4 flex justify-between items-center'>
              <Link href="#" className='text-lg font-bold' >{'Boat Shoes'}</Link>
              <span className="price text-lg font-bold">{'$99.00 USD'}</span>
            </div>
            <Link href='#' className='text-white h-10 w-10 hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <ShoppingCartIcon />
            </Link>
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