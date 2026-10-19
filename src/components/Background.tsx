export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <picture>
        <source media="(min-width: 1280px)" srcSet="/images/background.webp" />
        <img
          src="/images/mobile-background.webp"
          alt="guy coding in the dark with cozy background"
          className="h-full w-full object-cover  xl:object-left"
        />
      </picture>

      {/* Animated rain layer */}
      <div className="rain-window rain-window-left" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${i * 10}%`,
              animationDuration: `${1 + (i % 4) * 0.5}s`,
              animationDelay: `${-i * 0.3}s`,
            }}
          />
        ))}
      </div>
      <div className="rain-window rain-window-right" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${i * 10}%`,
              animationDuration: `${1 + (i % 4) * 0.5}s`,
              animationDelay: `${-i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* foreground of person coding */}
      <picture>
        <source media="(min-width: 1280px)" srcSet="/images/background-foreground.webp" />
        <img
          src="/images/mobile-background-foreground.webp"
          alt="guy coding in the dark without background"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover  xl:object-left"
        />
      </picture>
    </div>
  );
}
