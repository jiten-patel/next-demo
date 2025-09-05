import Image from "next/image";
import Link from 'next/link';
import Form from "next/form";
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white">
      <div className="text-white bg-black text-center p-3 text-sm">{'Free shipping on all orders over $50'}</div>
      <nav className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-28">
        <div className="flex lg:flex-1"><Image className="h-7 w-auto" src="/Stepozo.png" width={113} height={35} alt="stepozo" /></div>
        <ul className="lg:flex lg:gap-x-12">
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Women</Link></li>
          <li><Link href="#">Shop</Link></li>
          <li><Link href="#">About</Link></li>
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="mr-3">
            <Form action="#" className="flex items-center gap-x-2 border border-gray-600 rounded-3xl py-1 px-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input type="text" placeholder="Search" className="w-auto border-none outline-none "></input>
            </Form>

          </div>
          <div className="mr-3">
            <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div className="mr-3">
            <UserIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div className="mr-3">
            <HeartIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </nav>
    </header>
  );
}