import { HiBars2 } from "react-icons/hi2";

const Nav = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between p-8">
      <div>ArtDante</div>
      <div>
        <HiBars2 fontSize={34} />
      </div>
    </nav>
  );
};

export default Nav;
