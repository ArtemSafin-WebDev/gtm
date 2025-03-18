import Nav from "./Nav";
import User from "./User";

function Header() {
  return (
    <header className="flex items-center bg-deepblue px-15 py-8 text-white">
      <Nav></Nav>
      <User />
    </header>
  );
}

export default Header;
