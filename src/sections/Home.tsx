export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-2 justify-end min-h-dvh px-6 pb-24 snap-start"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-50% to-background/90"
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
        <a
          className="bg-accent rounded w-fit px-5 py-3 text-background"
          href="#experience"
        >
          View Experience
        </a>{" "}
      </div>
    </section>
  );
}
