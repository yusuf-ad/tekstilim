import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

function InstagramStory() {
  return (
    <Link
      href={"/"}
      className={
        "block col-span-1 relative aspect-square bg-gray-5 border hover:border-tertiary-600 group overflow-hidden group"
      }
    >
      <Image
        src="/assets/man.png"
        className="object-cover w-full h-full"
        fill
        alt="deals of the month image"
      />

      <div className="opacity-0 pointer-events-none flex group-hover:opacity-100 transition-all  duration-200 items-center justify-center h-14 w-14 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white-500">
        <span className="text-3xl">
          <FaInstagram />
        </span>
      </div>
    </Link>
  );
}

export default InstagramStory;
