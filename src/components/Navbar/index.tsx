import { type FC } from "react";
import SearchBar from "../Searchbar";
import Link from "next/link";



const Navbar : FC = () => {
  return (
  <div className="flex flex-col items-center justify-center my-5">
    <h1 className="font-bold text-xl md:text-3xl py-5"><Link href="/">Penumbra Explorer</Link></h1>
    <div className="w-5/6 sm:max-w-lg">
      <SearchBar/>
    </div>
  </div>
  );
};

export default Navbar;