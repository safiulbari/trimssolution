import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w=full h-[80px] flex justify-around items-center text-gray-800">
      <p className="text-2xl font-bold">
        <Link to="/">TRIMS SOLUTION</Link>
      </p>
      <nav className="flex gap-4 text-gray-600 ">
        <Link className="hover:text-blue-600" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-600" to="/about">
          About
        </Link>
        <Link className="hover:text-blue-600" to="/products">
          Products
        </Link>
        <Link className="hover:text-blue-600" to="/machinery">
          Machinery
        </Link>
        <Link className="hover:text-blue-600" to="/clients">
          Clients
        </Link>
        <Link className="hover:text-blue-600" to="/whychooseus">
          Why Choose US
        </Link>
        <Link className="hover:text-blue-600" to="/contact">
          Contact
        </Link>
      </nav>
      <button className="bg-gray-100 px-4 py-2 hover:bg-gray-800 hover:text-gray-100">
        Request Quotes
      </button>
    </div>
  );
};

export default Header;
