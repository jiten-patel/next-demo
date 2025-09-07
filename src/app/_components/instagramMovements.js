import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

const InstagramMovements = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-4">{"Instagram Movements"}</h2>
            <p className="text-base text-center">
                {"Follow us on Instagram to see the latest trends and styles!"}
            </p>
            <div className="mt-10 flex flex-wrap justify-start">
                <div className="group w-1/4 h-[450px] p-3 relative">
                    <Image className="h-full bg-black object-cover group-hover:opacity-50 lg:aspect-auto" src="/images/women.jpg" width={400} height={450} alt="Instagram 1"></Image>
                    <div className="hidden  group-hover:block absolute top-52 bottom-30 left-0 right-0 text-center p-2">
                        <FaInstagram className="mx-auto mb-2 text-black" size={50} />
                    </div>
                </div>
                <div className="group w-1/4 h-[450px] p-3 relative">
                    <Image className="h-full bg-gray-200 object-cover group-hover:opacity-50 lg:aspect-auto" src="/images/instagram2.jpg" width={400} height={450} alt="Instagram 2"></Image>
                    <div className="hidden group-hover:block absolute top-52 bottom-30 left-0 right-0 text-center p-2">
                        <FaInstagram className="mx-auto mb-2 text-black" size={50} />
                    </div>
                </div>
                <div className="group w-1/4 h-[450px] p-3 relative">
                    <Image className="h-full bg-gray-200 object-cover group-hover:opacity-50 lg:aspect-auto" src="/images/instagram3.jpg" width={400} height={450} alt="Instagram 3"></Image>
                    <div className="hidden group-hover:block absolute top-52 bottom-30 left-0 right-0 text-center p-2">
                        <FaInstagram className="mx-auto mb-2 text-black" size={50} />
                    </div>
                </div>
                <div className="group w-1/4 h-[450px] p-3 relative">
                    <Image className="h-full bg-gray-200 object-cover group-hover:opacity-50 lg:aspect-auto" src="/images/instagram4.jpg" width={400} height={450} alt="Instagram 4"></Image>
                    <div className="hidden group-hover:block absolute top-52 bottom-30 left-0 right-0 text-center p-2">
                        <FaInstagram className="mx-auto mb-2 text-black" size={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramMovements
