import Image from "next/image";
import Features from "../_components/features";
import Form from "next/form";
import InstagramMovements from "../_components/instagramMovements";

export default function About() {
  return (
    <div className="container-mx-auto">
      <div className="bg-black text-white text-center mb-10 px-28 py-44">
        <h1 className="text-5xl font-bold mb-4">{"About Us"}</h1>
        <p className="text-base">
          {"We are a company dedicated to providing the best footwear for our customers. Our mission is to combine comfort and style in every pair of shoes we create."}</p>
      </div >
      <div className="mx-28 mt-32">
        <div className="mb-10 flex flex-row">
          <div className="w-1/2 mr-10">
            <Image src="/about.png" width={810} height={700} alt="About Us"></Image>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="mb-6 ">
              <h2 className="text-4xl font-bold mb-4">{"Welcome to Stepozo – Where Every Step Matters."}</h2>
              <p>{"At Stepozo, we believe that the right pair of shoes can take you anywhere. As a dedicated online footwear platform with our own exclusive store, we combine comfort, style, and craftsmanship in every design. Whether you're stepping into a meeting, a workout, or a weekend getaway, Stepozo has the perfect pair to walk your story."}</p>
              <p>{"With a focus on quality materials, trend-forward designs, and customer-first service, Stepozo is more than just a shoe store — it's your step toward confidence and individuality."}</p>
            </div>
            <div className="mt-6 flex flex-row justify-between text-center">
              <div className="mt-1">
                <h2 className="text-5xl font-bold">{"70k+"}</h2>
                <p className="text-base mt-2">{"Total Sales"}</p>
              </div>
              <div className="mt-1">
                <h2 className="text-5xl font-bold">{"1k+"}</h2>
                <p className="text-base mt-2">{"Products"}</p>
              </div>
              <div className="mt-1">
                <h2 className="text-5xl font-bold">{"1.5k+"}</h2>
                <p className="text-base mt-2">{"Happy Customers"}</p>
              </div>
              <div className="mt-1">
                <h2 className="text-5xl font-bold">{"10+"}</h2>
                <p className="text-base mt-2">{"Years in Business"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Features />
      </div>
      <div className='row bg-black text-white flex mx-28 my-32 p-5 justify-between items-center rounded-[50px]'>
        <div className="w-1/2 flex flex-col justify-between items-start pl-10">
          <h2 className="text-5xl font-bold mr-10">{"Subscribe and get 15% off your first order."}</h2>
          <Form action="#" className="mt-6 flex items-center justify-between bg-white text-black gap-x-2 border border-gray-600 rounded-full py-4 px-5 w-3/4">
            <input type="text" name="subscribe" id="subscribe" placeholder="Enter your email" className="w-full border-none outline-none placeholder-gray-500 px-4" />
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-3xl mr-2">{"Subscribe"}</button>
          </Form>
        </div>
        <div className="w-1/2 flex justify-end pr-10">
          <Image src="/about-newsletter.png" width={757} height={505} alt="Newsletter"></Image>
        </div>
      </div>
      <div className="mb-32 mx-28">
        <InstagramMovements />
      </div>
    </div>
  );
}