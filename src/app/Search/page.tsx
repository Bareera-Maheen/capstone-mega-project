import Link from "next/link";
import Search from "../components/Search";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";



const SearchPage = () => {
  return (
    <div className="wrapper">
      <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Search</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/Search">Search</Link></h3>
     
  </div>
      <Search />  {/* Yahan search bar ka component use ho raha hai */}
      {/* Additional search results or content */}
    </div>
  );
};

export default SearchPage;