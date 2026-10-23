import { Briefcase, FolderOpen, Home, User } from "lucide-react";
const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "About", href: "#about", icon: User },
];

type NavigationProps = {
  activeSection: string;
};

export function DesktopNavigation({ activeSection }: NavigationProps) {
  return (
    <nav
      aria-label="main navigation"
      className="fixed inset-x-[25%] mx-6 px-2 py-3 hidden rounded-3xl justify-around z-50 border border-foreground/20 bg-surface/80 backdrop-blur-md lg:flex lg:py-2 xl:inset-x-[30%]"
    >
      {navItems.map(({ label, href }) => {
        const isCurrent = activeSection === href.slice(1);

        return (
          <a
            key={href}
            href={href}
            aria-current={isCurrent ? "location" : undefined}
            className={`flex flex-col text-sm items-center gap-0.5 py-2 px-6 rounded-full ${isCurrent ? "bg-accent/20 text-accent" : "text-muted hover:text-foreground"}`}
          >
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function MobileNavigation({ activeSection }: NavigationProps) {
  return (
    <nav
      aria-label="main navigation"
      className="fixed bottom-3 inset-x-0 mx-6 px-2 py-3 flex rounded-3xl justify-around z-50 border border-foreground/20 bg-surface/80 backdrop-blur-md lg:hidden"
    >
      {navItems.map(({ label, href, icon: Icon }) => {
        const isCurrent = activeSection === href.slice(1);

        return (
          <a
            key={href}
            href={href}
            aria-current={isCurrent ? "location" : undefined}
            className={`flex flex-col text-sm items-center gap-0.5
              ${isCurrent ? "text-foreground" : "text-muted"}`}
          >
            <Icon /> <span>{label}</span>{" "}
            <span
              className={`size-2 rounded-full bg-accent shadow-[0_0_14px_5px] shadow-accent/50
                ${isCurrent ? "block" : "hidden"}`}
            />
          </a>
        );
      })}
    </nav>
  );
}
