import { Volume2, VolumeX } from "lucide-react";
import useRainAudio from "../hooks/useRainAudio";
import { DesktopNavigation } from "./Navigation";

type HeaderProps = {
  activeSection: string;
};

export default function Header({ activeSection }: HeaderProps) {
  const { isPlaying, toggleAudio } = useRainAudio();

  return (
    <header className="fixed flex justify-end items-center w-full z-50 top-0 left-0 p-3">
      {/* Extended gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-background/90 to-transparent"
      />

      <DesktopNavigation activeSection={activeSection}/>

      {/* volume slider/toggle button */}
      <button
        type="button"
        aria-label="volume-toggle"
        className="bg-surface/70 rounded-full border border-foreground/30 p-2 z-10 text-muted hover:cursor-pointer hover:text-foreground"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <Volume2 strokeWidth={1.5} className="size-5 lg:size-8" />
        ) : (
          <VolumeX strokeWidth={1.5} className="size-5 lg:size-8" />
        )}
      </button>
    </header>
  );
}
