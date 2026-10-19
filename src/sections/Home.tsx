import { Cat, Code2, Mail, Users } from "lucide-react";

const socials = [
  { name: "Github", icon: Cat, link: "https://github.com/gnikkoch96" },
  { name: "E-Mail", icon: Mail, link: "mailto:nikkochdev@gmail.com" },
  {
    name: "LinkedIn",
    icon: Users,
    link: "https://www.linkedin.com/in/nikko-chan-68533b121/",
  },
  { name: "CodePen", icon: Code2, link: "https://codepen.io/gnikkoch96" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-2 justify-end min-h-dvh px-6 pb-26 snap-start"
    >
      {/* start transition to transparent dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-25% to-background/90"
      />

      <div className="relative z-10 flex flex-col gap-2">
        <p className="text-muted">Hi, I'm</p>
        <h1 className="font-bold text-4xl">Nikko Chan</h1>
        <p className="font-bold text-accent text-lg">
          Full-Stack Developer (Frontend Focused)
        </p>
        <p className="text-muted">
          I'm a fullstack software engineer with 3+ years of experience building
          production web applications, including AI-powered educational
          platforms.
        </p>

        {/* socials */}
        <div className="flex gap-2">
          {socials.map(({name, icon: Icon, link}) => (
            <a aria-label={name} key={name} target="_blank" href={link} className="border border-muted/30 rounded-xl p-2 bg-surface"><Icon size={30}/></a>
          ))}
        </div>

        <a
          className="hidden lg:block bg-accent rounded w-fit px-5 py-3 text-background"
          href="#experience"
        >
          View Experience
        </a>
      </div>
    </section>
  );
}
