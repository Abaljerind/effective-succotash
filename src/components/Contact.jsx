import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="panel relative h-screen snap-start">
      <div className="shape absolute top-36 right-60 size-44"></div>
      <div className="flex items-center justify-between px-60 py-32 backdrop-blur-2xl">
        <p className="w-96 text-4xl">
          Let's mix our skills with your ideas and create something beautiful
        </p>
        <button className="glass-btn size-48 rounded-full text-lg">
          Start a project
        </button>
      </div>
      <div className="flex items-center justify-between px-60 py-20 text-xl">
        <div className="space-y-2">
          <p className="opacity-60">Phone Number</p>
          <p>+ 111 54 0987</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Email</p>
          <p>info@artdante.com</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-60">Social media</p>
          <div className="flex gap-8 [&>*]:cursor-pointer">
            <FaBehance className="hover:text-orange-500" />
            <FaFacebook className="hover:text-orange-500" />
            <FaInstagram className="hover:text-orange-500" />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between px-60 py-10 opacity-50">
        <div className="text-lg">&copy;2025 All rights reserved</div>
        <div className="flex items-center gap-8">
          <p>Eng</p>
          <div className="h-[1px] w-20 bg-white/50"></div>
          <p>Ar</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
