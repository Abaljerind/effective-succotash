const Hero = () => {
  return (
    <section className="panel relative h-screen snap-start">
      <div className="shape absolute top-40 right-40 h-[25rem] w-[40rem] -rotate-45"></div>
      <div className="h-full px-40 backdrop-blur-3xl">
        <div className="flex h-full flex-col justify-center gap-1 px-20">
          <span className="text-xl opacity-50">Design & development</span>
          <h1 className="text-7xl">
            If code is a poetry - then <br /> we are Dante
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
