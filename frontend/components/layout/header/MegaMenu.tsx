const Mendata = [
  { id: 1, title: "T-Shirts" },
  { id: 2, title: "Casual Shirts" },
  { id: 3, title: "Formal Shirts" },
  { id: 4, title: "Jackets" },
  { id: 5, title: "Blazers & Coats" },
];

const Womendata = [
  { id: 1, title: "Kurtas & Suits" },
  { id: 2, title: "Sarees" },
  { id: 3, title: "Ethnic Wear" },
  { id: 4, title: "Lehenga Cholis" },
  { id: 5, title: "Jackets" },
];

const Footweardata = [
  { id: 1, title: "Flats" },
  { id: 2, title: "Casual Shoes" },
  { id: 3, title: "Heels" },
  { id: 4, title: "Boots" },
  { id: 5, title: "Sport Shoes & Floaters" },
];

const Kidsdata = [
  { id: 1, title: "T-Shirts" },
  { id: 2, title: "Shirts" },
  { id: 3, title: "Jeans" },
  { id: 4, title: "Trousers" },
  { id: 5, title: "Party Wear" },
  { id: 6, title: "Inner Wear & Thermal" },
  { id: 7, title: "Track Pants" },
];

function MenuList({
  title,
  list,
}: {
  title: string;
  list: { id: number; title: string }[];
}) {
  return (
    <div className="ml-8 w-44 border-l border-primary-80/15 pl-8 first:ml-0 first:border-l-0 first:pl-0">
      <h3 className="mb-2 font-bold text-primary-900">{title} </h3>

      <ul>
        {list.map((item) => (
          <li key={item.id} className="py-1">
            <a
              href="#"
              className="text-primary-500 underline-offset-4 hover:text-gray-950 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenu() {
  return (
    <div className="hidden shadow-2xl group-hover:block">
      <div className="peer absolute -left-72 top-14 z-50 bg-gray-5 px-2 py-2 shadow-lg">
        <div className="flex px-6 py-6">
          <MenuList title="Erkek" list={Mendata} />
          <MenuList title="Kadın" list={Womendata} />
          <MenuList title="Ayakkabı" list={Footweardata} />
          <MenuList title="Çocuk" list={Kidsdata} />
        </div>
      </div>
      <div className="fixed inset-0 top-[108px] z-40 bg-black opacity-50 hover:hidden peer-hover:block"></div>
    </div>
  );
}

export default MegaMenu;
