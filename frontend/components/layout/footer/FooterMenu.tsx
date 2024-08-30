function FooterMenu({
  title,
  list,
}: {
  title: string;
  list: { title: string; link: string }[];
}) {
  return (
    <div>
      <h3 className="text-white-500 mb-6">{title}</h3>
      <ul className="flex gap-4 flex-col text-sm">
        {list.map((item) => (
          <li className="hover:underline underline-offset-4">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterMenu;
