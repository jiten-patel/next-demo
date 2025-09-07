import Image from 'next/image'

const Features = () => {
    return (
        <section className='row my-32 mx-36 flex justify-center items-center md:mx-28 sm:mx-10 sm:flex-row sm:items-center sm:justify-center sm:flex-wrap'>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center md:px-4'>
                <div className="w-1/4 h-full">
                    <Image src="/shipping-fast.png" width={100} height={100} alt="Delivery Truck" />
                </div>
                <div className="w-3/4 h-full ml-12 md:ml-6">
                    <p className="text-4xl font-bold md:text-3xl/none">Free Delivery</p>
                    <p className="text-base mt-3">Free shipping on all orders</p>
                </div>
            </div>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center md:px-4'>
                <div className="w-1/4 h-full">
                    <Image src="/return_policy.png" width={100} height={100} alt="Return Policy" />
                </div>
                <div className="w-3/4 h-full ml-12 md:ml-6">
                    <p className="text-4xl font-bold md:text-3xl/none">Easy Return Policy</p>
                    <p className="text-base mt-3">14 Days Easy Return</p>
                </div>
            </div>
            <div className='mt-6 px-8 w-1/3 flex flex-row justify-center items-center md:px-4'>
                <div className="w-1/4 h-full">
                    <Image src="/time-twenty-four.png" width={100} height={100} alt="Secure Payment" />
                </div>
                <div className="w-3/4 h-full ml-12 md:ml-6 md:text-3xl/none">
                    <p className="text-4xl font-bold">24/7 Support</p>
                    <p className="text-base mt-3">Support online 24 hours a day</p>
                </div>
            </div>
        </section>
    )
}

export default Features
