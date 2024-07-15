// Header.js
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 sm:px-8">
      <h1 className="text-pink-500 text-2xl font-bold">
        <Link to="/" className="hover:text-pink-500 text-lg">
          AnimateAura
        </Link>
      </h1>
      <nav className="mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
          <Link to="/" className="hover:text-pink-500 text-lg">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-500 text-lg">
            About
          </Link>
          <Link to="/career" className="hover:text-pink-500 text-lg">
            Career
          </Link>
          <Link to="/services" className="hover:text-pink-500 text-lg">
            Services
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
