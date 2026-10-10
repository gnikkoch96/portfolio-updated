export default function Home() {
  return (
    <section id="home" className="flex flex-col gap-2 justify-end min-h-dvh pb-24 snap-start">
      <p className="text-muted">Hi, I'm</p>
      <h1 className="font-bold text-4xl">Nikko Chan</h1>
      <p className="font-bold text-accent text-lg">Full-Stack Developer (Frontend Focused)</p>
      <p className='text-muted'>
        I'm a fullstack software engineer with 3+ years of experience building
        production web applications, including AI-powered educational platforms.
      </p>
      <a className="bg-accent rounded w-fit px-5 py-3 text-background" href="#experience">View Experience</a>
    </section>
  );
}
