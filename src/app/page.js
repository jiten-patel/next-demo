import Image from "next/image";
import Link from 'next/link';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Features from "./_components/features";

export default function Home() {
  return (
    <div className='container-mx-auto'>
      {/* Hero Banner Section */}
      <section className='row'>
        <div className='w-[37%] absolute z-10 xl:top-[74%] xl:left-[110px] md:top-[15%] md:left-[90px] sm:left-[80px]'>
          <h1 className="text-black  leading-none xl:text-5xl font-bold  xl:mb-5 md:text-3xl md:mb-4 sm:text-2xl/none">{"Step into greatness with Stepozo."}</h1>
          <p className="text-lg font-medium mb-10 md:text-base/none">{"Experience the freedom of breathable, comfortable shoes designed to take you anywhere you want to go with comfort meets confidence."}</p>
          <Link href="#" className='bg-white text-black font-bold py-3 px-5 rounded-3xl'>{"Explore now"}</Link>
        </div>
        <div className='relative z-0'>
          <Image src="/Banner.png" alt="Shoes" width={1920} height={814} />
        </div>
      </section>
      {/* Bestsellers Section */}
      <section className='row my-20'>
        <div className='align-center text-center mb-10'>
          <h2 className='text-black text-5xl font-bold mb-5'>Our Bestsellers</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-8 lg:px-8'>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto"
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
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto"
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
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto"
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
            <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto"
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
      {/* Featured Products Section */}
      <section className='row grid grid-cols-1 md:grid-cols-2'>
        <div className='relative h-full'>
          <div className="relative h-full z-0">
            <Image src="/images/women.png" className="h-full object-cover" width={960} height={627} alt="Women Shoes" />
          </div>
          <div className='absolute bottom-20 left-28 z-10 w-4/5 flex flex-row justify-between items-center md:bottom-12 md:left-16 '>
            <h3 className='text-5xl font-bold md:text-3xl/none'>For Women</h3>
            <a href="#" className='bg-white text-black text-lg font-bold px-5 py-3 rounded-full md:text-base md:px-4 md:py-2'>Shop women</a>
          </div>
        </div>
        <div className='relative h-full'>
          <div className="relative h-full object-cover z-0">
            <Image src="/images/men.jpg" className="h-full object-cover" width={960} height={627} alt="Men Shoes" />
          </div>
          <div className='absolute bottom-20 left-28 z-10 w-4/5 flex flex-row justify-between items-center md:bottom-12 md:left-16 '>
            <h3 className='text-5xl font-bold md:text-3xl/none'>For Men</h3>
            <a href="#" className='bg-white text-black text-lg font-bold px-5 py-3 rounded-full md:text-base md:px-4 md:py-2'>Shop men</a>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className='row my-20 px-8 lg:px-0'>
        <h2 className="text-5xl block font-bold text-center mb-4">{'Shop by Category'}</h2>
        <div className='mt-6 px-8 lg:px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/sneakers.png" width={387} height={388} alt="Sneakers" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Sneakers'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/leather.png" width={387} height={388} alt="Leather Boots" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Leather Boots'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/snow.png" width={387} height={388} alt="Snow Boots" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Snow Boots'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/running.png" width={387} height={388} alt="Running Shoes" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Running Shoes'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/loafers.png" width={387} height={388} alt="Loafers" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Loafers'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/oxfords.png" width={387} height={388} alt="Oxfords shoes" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Oxfords shoes'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/sports.png" width={387} height={388} alt="Sports Shoes" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Sports Shoes'}</Link>
              </div>
            </Link>
          </div>
          <div className='group relative p-5 border border-gray-200 rounded-lg hover:shadow-lg  transition-shadow duration-300'>
            <Link href='#'>
              <Image className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-85 lg:aspect-auto lg:h-96"
                src="/images/formal.png" width={387} height={388} alt="Formal Shoes" />
              <div className='mt-4 flex justify-center items-center'>
                <Link href="#" className='text-2xl font-bold' >{'Formal Shoes'}</Link>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <Features />
      {/* Promotional Banner Section */}
      <section className='row my-32 px-8 lg:px-0'>
        <div className='relative z-0'>
          <Image width={1920} height={800} src="/images/promo.png" alt="Promo Shoes" />
        </div>
      </section>
    </div>
  );
}