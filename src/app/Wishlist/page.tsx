
import Wishlist from "../components/Wishlist";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";


const WishlistPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 wrapper">
      <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Wishlist</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/Wishlist">Wishlist</Link></h3>
     
  </div>
      <Wishlist />
    </div>
  );
};

export default WishlistPage;
