import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w=full h-[80px] flex justify-around items-center text-gray-800">
      <p className="text-2xl font-semibold">TRIMS SOLUTION</p>
      <nav className="flex gap-4 text-gray-600 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/machinery">Machinery</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/whychooseus">Why Choose US</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="bg-gray-100 px-4 py-2 hover:bg-gray-800 hover:text-gray-100">
        Request Quotes
      </button>
    </div>
  );
};

export default Header;
