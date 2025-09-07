import Image from 'next/image'

const Features = () => {
    return (
        <section className='row my-32 mx-36 flex justify-center items-center'>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center '>
                <div className="w-1/4 h-full">
                    <Image src="/shipping-fast.png" width={100} height={100} alt="Delivery Truck" />
                </div>
                <div className="w-3/4 h-full ml-12">
                    <p className="text-4xl font-bold">Free Delivery</p>
                    <p className="text-base mt-3">Free shipping on all orders</p>
                </div>
            </div>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center'>
                <div className="w-1/4 h-full">
                    <Image src="/return_policy.png" width={100} height={100} alt="Return Policy" />
                </div>
                <div className="w-3/4 h-full ml-12">
                    <p className="text-4xl font-bold">Easy Return Policy</p>
                    <p className="text-base mt-3">14 Days Easy Return</p>
                </div>
            </div>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center'>
                <div className="w-1/4 h-full">
                    <Image src="/time-twenty-four.png" width={100} height={100} alt="Secure Payment" />
                </div>
                <div className="w-3/4 h-full ml-12">
                    <p className="text-4xl font-bold">24/7 Support</p>
                    <p className="text-base mt-3">Support online 24 hours a day</p>
                </div>
            </div>
        </section>
    )
}

export default Features
