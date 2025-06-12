const About = () => {
  return (
    <section className="panel relative h-screen snap-start">
      <div className="shape absolute right-0 left-0 h-[60vh] w-full rotate-180"></div>
      <div className="flex h-full w-full flex-col justify-center p-40 backdrop-blur-3xl">
        <h1 className="p-20 text-8xl">About</h1>
        <div className="flex w-96 flex-col gap-6 self-center font-sans opacity-50">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            doloremque. Amet nihil minus suscipit esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            totam recusandae fugiat libero, at veritatis maiores. Distinctio
            nostrum fugiat at!
          </p>
        </div>

        <div className="px-10 py-20">
          <div className="flex items-center justify-around gap-40">
            <h1 className="text-5xl">Services</h1>
            <ul className="space-y-2">
              <p>Development</p>
              <li className="opacity-60">Front-end</li>
              <li className="opacity-60">Back-end</li>
              <li className="opacity-60">Seo and serm optimization</li>
            </ul>
            <ul className="space-y-2">
              <p>Design</p>
              <li className="opacity-60">UI/UX</li>
              <li className="opacity-60">Branding</li>
              <li className="opacity-60">Motion Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
