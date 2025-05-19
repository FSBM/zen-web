import crewo_icon from "../../assets/crewo_icon.svg";
import UserDropdown from "../UserDropdown";
import { FloatingDock } from "../ui/floatingDock";
import {
  IconExchange,
  IconNewSection,
  IconTerminal2,
  IconLayout,
  IconSettings
} from "@tabler/icons-react";
import TopOptions from "../ui/TopOptions";

const links = [
  {
    title: "Home",
    icon: <IconLayout className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Products",
    icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Components",
    icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Changelog",
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#080808] text-white relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-3 flex justify-between items-center">
        <img src={crewo_icon} alt="Crewo Logo" className="h-8 w-auto" />
        <TopOptions
          OptionList={[
            { title: "Explore", href: "/Explore" },
            { title: "My Projects", href: "/MyProjects" },
          ]}
        />
        <UserDropdown Items={[{ DropDownItems: "Profile", toPage: "./Page" }]} />
      </header>

      <aside className="fixed top-0 left-0 z-40 w-20 h-full pt-20 bg-black">
        <FloatingDock items={links} />
        <div className="bottom-6 absolute w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center  bg-neutral-900 px-2 py-2 w-16 rounded-lg">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gray-50 dark:bg-neutral-800 hover:scale-105 transition duration-200 ease-in-out"
            >
              <IconSettings className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 ml-20 mt-16 overflow-hidden ">
        <div className="h-full w-full overflow-y-auto rounded-t-lg border border-white/20 p-4   ">
          {children}
        </div>
      </main>
    </div>
  );
}