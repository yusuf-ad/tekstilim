import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import { ReactNode } from "react";

interface Navbarprops {
  id: number;
  title: string;
  link: string;
  icon?: ReactNode;
  submenu?: true;
}

const Navbardata: Navbarprops[] = [
  { id: 1, title: "Ana Sayfa", link: "#" },
  {
    id: 2,
    title: "Mağaza",
    icon: <FaChevronDown />,
    link: "#",
    submenu: true,
  },
  { id: 3, title: "Hikayemiz", link: "#" },
  { id: 4, title: "Blog", link: "#" },
  { id: 5, title: "Bize Ulaşın", link: "#" },
];

function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-4 lg:flex">
        {Navbardata.map((data) => (
          <li className="group relative p-2 py-4" key={data.id}>
            <a
              className="flex items-center font-semibold text-primary-400 hover:text-primary-900"
              href={data.link}
            >
              {data.title}
              {/* {data.icon && (
                <i className={`fa ml-[6px] text-sm ${data.icon}`}></i>
              )} */}
              {data.icon && (
                <span className="ml-[6px] text-sm">{data.icon}</span>
              )}
            </a>
            {data.submenu && <MegaMenu />}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
