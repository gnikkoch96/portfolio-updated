import { Volume2, VolumeX } from "lucide-react";
import useRainAudio from "../hooks/useRainAudio";

export default function Header() {
  const { isPlaying, toggleAudio } = useRainAudio();

  return (
    <header className="fixed flex justify-end items-center w-full z-50 top-0 left-0 p-3">
      {/* Extended gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background/90 to-transparent"
      />

      {/* volume slider/toggle button */}
      <button
        type="button"
        aria-label="volume-toggle"
        className="bg-surface/70 rounded-full border border-foreground/30 p-2 z-10"
        onClick={toggleAudio}
      >
        {isPlaying ? (
          <Volume2 strokeWidth={1.5} size={20} />
        ) : (
          <VolumeX strokeWidth={1.5} size={20} />
        )}
      </button>
    </header>
  );
}
