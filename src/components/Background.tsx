export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/background.png"/>
        <img
          src="/images/mobile-background.png"
          alt="guy coding in the dark with cozy background"
          className="h-full w-full object-cover"
        />
      </picture>
      
      {/* <div className="absolute inset-0 bg-black/30"></div> */}
    </div>
  );
}
