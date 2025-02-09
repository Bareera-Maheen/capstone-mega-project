import Image from "next/image";
import { IoMdStopwatch } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";


import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const Hero = () => {
  return (
    <main className=" wrapper ">
      {/* Section 1 */}
      <section>
        <div className="bg-[#FBEBB5] flex flex-col md:flex-row xl:h-[900px] md:h-auto sm:h-auto items-center">
          <div className="w-full md:w-[440px]  h-auto text-center md:text-left  md:ml-[113px] mt-12">
            <h2 className="xl:text-5xl sm:text-3xl md:text-3xl font-bold">Rocket single seater</h2>
            <h3 className="text-lg underline">Shop Now</h3>
          </div>
          <div className="w-full md:w-[853px] h-auto">
            <Image src="/images/01.svg" alt="Rocket Single Seater" width={500} height={500} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <div className='md:h-auto bg-[#FAF4F4] flex  xl:h-auto'>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 xl:p-4">
          {/* First Product */}
          <div className="w-full xl:w-[50%]">
            <Image src="/images/02.svg" alt="Side Table" width={600} height={400} />
            <div className="flex gap-2 items-baseline mt-4">
              <Link href="/checkout">
                <CiHeart className="text-2xl" />
              </Link>
            </div>
            <div className="text-start mt-4">
              <h2 className="text-xl font-bold">Side Table</h2>
              <h3 className="text-lg font-semibold underline">View More</h3>
            </div>
          </div>
          {/* Second Product */}
          <div className="w-full xl:w-[50%]">
            <Image src="/images/03.svg" alt="Side Table" width={600} height={400} />
            <div className="flex gap-2 items-baseline mt-4">
                  <Link href="/checkout">
                <CiHeart className="text-2xl" />
              </Link>
            </div>
            <div className="text-start mt-4">
              <h2 className="text-xl font-bold">Side Table</h2>
              <h3 className="text-lg font-semibold underline">View More</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <section className="bg-[#FFFFFF] py-7 md:h-auto sm:h-auto">
        <h1 className="text-2xl text-center">Top Picks For You</h1>
        <p className="text-center mb-7">Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 p-10">
          {/* Product 1 */}
          <div className="w-full max-w-[350px]">
            <Image src="/images/04.svg" alt="Trenton Modular Sofa" width={300} height={200} />
            <h3>Trenton Modular Sofa</h3>
            <h2 className="font-semibold">Rs. 25000.00</h2>
          </div>
          {/* Product 2 */}
          <div className="w-full max-w-[350px]">
            <Image src="/images/05.svg" alt="Granite Dining Table" width={300} height={200} />
            <h3>Granite Dining Table with Dining Chairs</h3>
            <h2 className="font-semibold">Rs. 25000.00</h2>
          </div>
          {/* Product 3 */}
          <div className="w-full max-w-[350px]">
            <Image src="/images/06.svg" alt="Outbar Table and Stool" width={300} height={200} />
            <h3>Outbar Table and Stool</h3>
            <h2 className="font-semibold">Rs. 25000.00</h2>
          </div>
          {/* Product 4 */}
          <div className="w-full max-w-[350px]">
            <Image src="/images/07.svg" alt="Plain Console with Leak Mirror" width={300} height={200} />
            <h3>Plain Console with Leak Mirror</h3>
            <h2 className="font-semibold">Rs. 25000.00</h2>
          </div>
        </div>
        <h3 className="text-center text-lg font-semibold underline"><Link href="/shop">View More</Link></h3>
      </section>

      {/* Section 4 - New Arrival */}
      <section className="bg-[#FFF9E5] flex flex-col md:flex-row xl:h-auto justify-evenly items-center pl-3 pr-3">
        <div className="w-full md:w-[900px]">
          <Image src="/images/08.svg" alt="New Arrival - Asgaard Sofa" width={900} height={799} />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl">New Arrival</h3>
          <h2 className="text-5xl font-bold">Asgaard Sofa</h2>
          <button className="border-2 border-black bg-[#FFF9E5] text-black px-8 py-2 rounded-full">
            <Link href="/singleproduct">Order Now</Link>
          </button>
        </div>
      </section>

      {/* Section 5 - Blogs */}
      <section className="bg-[#FFFFFF] py-7 md:h-auto sm:h-auto xl:h-auto">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our Blogs</h2>
          <h3 className="text-2xl text-slate-500">Find a bright idea to suit your taste with our great selection</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 pt-7">
          {/* Blog 1 */}
          <div className="text-center">
            <Image src="/images/09.svg" alt="Blog 1" width={393} height={393} />
            <h2>Going All-In with Millennial Design</h2>
            <h4 className="underline font-semibold">Read More</h4>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <IoMdStopwatch /><h2>5 min</h2>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendar /><h2>12<sup>th</sup> Oct 2022</h2>
              </div>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="text-center">
            <Image src="/images/10.svg" alt="Blog 2" width={393} height={393} />
            <h2>Going All-In with Millennial Design</h2>
            <h4 className="underline font-semibold">Read More</h4>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <IoMdStopwatch /><h2>5 min</h2>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendar /><h2>12<sup>th</sup> Oct 2022</h2>
              </div>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="text-center">
            <Image src="/images/11.svg" alt="Blog 3" width={393} height={393} />
            <h2>Going All-In with Millennial Design</h2>
            <h4 className="underline font-semibold">Read More</h4>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <IoMdStopwatch /><h2>5 min</h2>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendar /><h2>12<sup>th</sup> Oct 2022</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="text-center text-2xl font-semibold underline">
          <Link href="/about">View More</Link>
        </button>
      </section>

      {/* Section 6 - Instagram */}
      <section
        className="flex justify-center items-center bg-cover bg-center text-center text-black h-[100vh]"
        style={{ backgroundImage: "url('/images/12.svg')" }}
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Our Instagram</h2>
          <h3 className="text-xl">Follow our store on Instagram</h3>
          <button className="bg-white text-black py-2 px-6 rounded-full mt-4 transition shadow-lg">
            Follow Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
