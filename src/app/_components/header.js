'use client';
import Image from "next/image";
import Link from 'next/link';
import Form from "next/form";
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women'
    },
    {
      id: 'men',
      name: 'Men'
    },
  ],
  pages: [
    { name: 'About', href: '/about' }
  ],
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white">
      <div className="text-white bg-black text-center p-3 text-sm md:p-2 ">{'Free shipping on all orders over $50'}</div>
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <nav className="mx-auto flex max-w-full items-center justify-between p-6 px-28 md:px-20 sm:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image className="h-7 w-auto" src="/Stepozo.png" width={113} height={35} alt="stepozo" />
          </Link>
        </div>
        <ul className="flex gap-x-12 md:gap-x-10">
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Women</Link></li>
          <li><Link href="#">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <div className="items-center lg:flex lg:flex-1 lg:justify-end">
          <div className="mr-3">
            <Form action="#" className="flex items-center gap-x-2 border border-gray-600 rounded-3xl py-1 px-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input type="text" placeholder="Search" className="w-auto border-none outline-none  "></input>
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