import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { GrApps } from "react-icons/gr";
import { IconButton } from "@material-tailwind/react";
function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <IconButton size="lg" variant="text" className="h-20 w-20 bottom-0 ">
        <AiOutlineMenu color="grey" />
      </IconButton>
      <MdDescription color="blue"/>
      <h1 className="ml-2 text-grey-700 text-2xl">Docs</h1>
      <div className="flex flex-grow items-center px-5 py-2 ml-4 md:mx-20 bg-grey-100 text-grey-600 rounded-2xl focus-within:shadow-md">
        <AiOutlineSearch color="grey"/>
        <input type='text' placeholder="search" className="flex-grow px-4 text-base bg-transparent outline-none " />
      </div>
      <IconButton size="lg" variant="text" className="h-20 w-20 bottom-0 ml-2 hidden md:inline-flex">
        <GrApps color="grey" />
      </IconButton>
    </header>
  );
}

export default Header;
