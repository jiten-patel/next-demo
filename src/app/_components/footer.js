import Form from "next/form";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-black text-white px-20 pt-20 pb-6 mt-28 mx-12 lg:mx-28 rounded-t-[50px]'>
      <div className='flex flex-col md:flex-row justify-between pb-8'>
        <div className='pr-28 w-1/2'>
          <div className='w-full pb-8'><Image src="/Stepozo-white.png" alt="Stepozo" width={206} height={65} /></div>
          <p className='text-base font-normal pb-8'>{'Step into style and comfort with Stepozo, where every stride tells a story. From sleek sneakers to sophisticated loafers, we offer a curated collection to elevate your footwear game.'}</p>
          <div className='w-full pt-3'>
            <p className="font-bold text-2xl pb-3">{'Get the latest offers early.'}</p>
            <p className="text-base font-normal pb-3">{'Sign up for our newsletter to stay updated on the latest promotions and exclusive offers.'}</p>
            <Form id="newsletter" action='#' className='bg-white flex justify-between p-3 border border-gray-600 rounded-full overflow-hidden w-full'>
              <input type="email" name="email" id="footer-email" placeholder="Enter your email" className='p-2.5 w-full focus:outline-none text-black'></input>
              <button className='bg-black text-white px-8 py-2 rounded-3xl'>{'Send'}</button>
            </Form>
          </div>
        </div>
        <div className='pr-28 w-1/6'>
          <h4 className="text-2xl font-semibold pb-5">{'Pages'}</h4>
          <ul>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Home'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Men'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Women'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Shop'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Sale'}</Link></li>
          </ul>
        </div>
        <div className='pr-28 w-1/6'>
          <h4 className="text-2xl font-semibold pb-5">{'Support'}</h4>
          <ul>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'About Us'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'Contact'}</Link></li>
            <li className="pb-1.5 font-normal text-base"><Link href="#">{'FAQ'}</Link></li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h4 className="text-2xl font-semibold pb-5">{'Follow Us Now'}</h4>
          <ul>
            <li className="pb-3 font-normal text-base"><Link className="flex" href="#"><FaInstagram size={24} /><span className="ml-2" >{'Instagram'}</span></Link></li>
            <li className="pb-3 font-normal text-base"><Link className="flex" href="#"><FaXTwitter size={24} /><span className="ml-2" >{'Twitter'}</span></Link></li>
            <li className="pb-3 font-normal text-base"><Link className="flex" href="#"><FaFacebookF size={24} /><span className="ml-2" >{'Facebook'}</span></Link></li>
          </ul>
        </div>
      </div>
      <div className='border-t border-gray-600 pt-8 text-center'>
        <p>{'© 2025 Stepozo. Powered by Stepozo.org'}</p>
      </div>
    </footer>
  );
}