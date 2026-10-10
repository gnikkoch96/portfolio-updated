import { Volume2, VolumeX } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed flex justify-between items-center w-full z-50 top-0 left-0 px-6 py-3">
      {/* logo */}
      <span className="text-xl font-bold">NC</span>

      {/* volume slider/toggle button */}
      <button
        type="button"
        aria-label="volume-toggle"
        className="bg-surface/70 rounded-full border border-foreground/30 p-2"
      >
        <Volume2 strokeWidth={1.5} />
      </button>
    </header>
  );
}
