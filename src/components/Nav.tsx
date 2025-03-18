import NavDashIcon from "../icons/NavDashIcon";

import { cn } from "../utils";

const NAV_ITEMS = [
  {
    id: 1,
    title: "КАРТА",
    href: "#",
    selected: false,
  },
  {
    id: 2,
    title: "ОБЪЕКТЫ",
    href: "#",
    selected: false,
  },
  {
    id: 3,
    title: "ЖУРНАЛЫ",
    href: "#",
    selected: false,
  },
  {
    id: 4,
    title: "ОТЧЕТЫ",
    href: "#",
    selected: false,
  },
  {
    id: 5,
    title: "АНАЛИТИКА",
    href: "#",
    selected: false,
  },
  {
    id: 6,
    title: "СПРАВОЧНИКИ",
    href: "#",
    selected: false,
  },
  {
    id: 7,
    title: "3Д МОДЕЛЬ",
    href: "#",
    selected: true,
  },
];

function Nav() {
  return (
    <nav className="shrink-0">
      <ul className="flex items-center gap-x-14">
        {NAV_ITEMS.map((item) => (
          <li className="shrink-0" key={item.id}>
            <a
              href={item.href}
              className={cn(
                "flex items-center gap-1 text-sm font-bold transition-colors hover:text-orangish",
                {
                  "text-orangish": item.selected,
                },
              )}
            >
              {item.selected && (
                <NavDashIcon className="h-7 w-5 fill-orangish" />
              )}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
