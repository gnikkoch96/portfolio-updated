import { Volume2 } from "lucide-react";

export default function Header() {
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
      >
        <Volume2 strokeWidth={1.5} size={20} />
      </button>
    </header>
  );
}
