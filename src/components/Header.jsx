import { Dropdown } from "antd";

const LINKS = [
  {
    title: "Home",
    icon: "",
    link: "#",
  },
  {
    title: "Band",
    icon: "",
    link: "#",
  },
  {
    title: "Tour",
    icon: "",
    link: "#",
  },
  {
    title: "Contact",
    icon: "",
    link: "#",
  },
  {
    title: "More",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    ),
    link: "#",
    menu: {
      items: [
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item
            </a>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item（disabled）",
          key: "3",
          disabled: true,
        },
      ],
    },
  },
];

const Header = () => {
  return (
    <header className="sticky bg-black w-full h-[46px]  flex items-center justify-between z-10 top-0 left-0 right-0">
      <div className="text-white flex h-full">
        {LINKS.map((link) =>
          link.menu ? (
            <Dropdown key={link.menu.items.key} menu={link.menu}>
              <a
                key={link.title}
                href={link.link}
                className="m-auto px-6 uppercase hover:bg-slate-400 leading-[46px] flex gap-1"
                onClick={(e) => e.preventDefault()}
              >
                {/* <Space> */}
                {link.title}
                {link.icon && <button>{link.icon}</button>}
                {/* </Space> */}
              </a>
            </Dropdown>
          ) : (
            <a
              key={link.title}
              href={link.link}
              className="m-auto px-6 uppercase hover:bg-slate-400 leading-[46px] flex gap-1"
            >
              {link.title}
            </a>
          )
        )}
      </div>

      <div className="flex pr-3">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ccc"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
