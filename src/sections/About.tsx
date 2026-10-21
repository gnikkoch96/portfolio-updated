import SectionHeader from "../components/sections/SectionHeader";
import profileImage from "../assets/about/profile.webp";
import {
  Gamepad2,
  Code2,
  Lightbulb,
  Music,
  Footprints,
  HikingStick,
} from "lucide-react";

const hobbies = [
  { name: "Gaming", icon: Gamepad2 },
  { name: "Entrepreneurship", icon: Lightbulb },
  { name: "Music", icon: Music },
  { name: "Dancing", icon: Footprints },
  { name: "Game Development", icon: Code2 },
  { name: "Hiking/Walking", icon: HikingStick },
];

const aboutMeText = `I'm a software developer who enjoys turning ideas into something real. Working on educational applications has shown me how rewarding it is to build things that people actually use and benefit from. \n\n What I love most about programming is the mix of creativity and problem-solving. I enjoy starting with an idea, figuring things out along the way, and seeing it all come together. Knowing that something I've built can make someone's life a little easier is what keeps me motivated.`;

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="container-content-section">
        <SectionHeader sectionTitle="About" sectionSubtext="" />
        <p className="text-muted whitespace-pre-line lg:text-xl">{aboutMeText}</p>

        {/* what I enjoy */}
        <h3 className="text-2xl font-bold text-muted lg:text-3xl">Other Hobbies</h3>
        <div className="flex flex-wrap gap-2">
          {hobbies.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="flex gap-2 border border-muted/30  bg-background p-2 rounded-2xl text-sm lg:text-lg"
            >
              <Icon className="text-accent" /> {name}
            </span>
          ))}
        </div>
        {/* profile image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="profile image"
            loading="lazy"
            className="size-30 rounded-full border border-muted/30 lg:size-50"
          />
        </div>
      </div>
    </section>
  );
}
