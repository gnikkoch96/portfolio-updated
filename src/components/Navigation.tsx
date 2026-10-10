import { Briefcase, FolderOpen, Home, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "About", href: "#about", icon: User },
];

export default function Navigation() {
  return (
    <nav
      aria-label="main navigation"
      className="fixed bottom-3 inset-x-0 mx-6 px-2 py-3 flex rounded-3xl justify-around z-50 border border-foreground/20 bg-surface/80 backdrop-blur-md"
    >
      {navItems.map(({ label, href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="flex flex-col text-sm items-center gap-0.5"
        >
          <Icon /> <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
