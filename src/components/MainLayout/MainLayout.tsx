import crewo_icon from "../../assets/crewo_icon.svg";
import UserDropdown from "../UserDropdown";
import { FloatingDock } from "../ui/floatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
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
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        className="w-5 h-5 object-contain"
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#080808] text-white relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-3 flex justify-between items-center">
        <img src={crewo_icon} alt="Crewo Logo" className="h-8 w-auto" />
        <UserDropdown Items={[{ DropDownItems: "Profile", toPage: "./Page" }]} />
      </header>

      <aside className="fixed top-0 left-0 z-40 w-20 h-full pt-20 bg-black ">
        <FloatingDock items={links} />
      </aside>

      <main className="flex-1 ml-20 mt-16 overflow-hidden ">
        <div className="h-full w-full overflow-y-auto rounded-t-lg border border-white/20 p-4   ">
          {children}
        </div>
      </main>
    </div>
  );
}