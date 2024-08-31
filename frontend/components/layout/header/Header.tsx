import Button from "@/components/Button";
import Navbar from "./Navbar";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

function Header() {
  return (
    <header className="custom-container flex items-center justify-between px-6 py-4 md:px-8 md:py-6">
      <div>
        <a href="#">
          <h1 className="md:text-4xl text-2xl font-semibold">tekstilim</h1>
        </a>
      </div>

      <Navbar />

      <div className="flex items-center gap-8">
        <div className="hidden gap-8 lg:flex">
          <button className="text-xl text-primary-400 hover:text-primary-900">
            <FaMagnifyingGlass />
          </button>
          <button className="text-xl text-primary-400 hover:text-primary-900">
            <FaRegHeart />
          </button>
          <button className="text-xl text-primary-400 hover:text-primary-900">
            <FaShoppingBag />
          </button>
        </div>

        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
