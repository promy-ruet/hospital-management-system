import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "DEPARTMENTS", path: "/departments" },
    { name: "CONSULTANTS", path: "/consultants" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-4">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`px-4 py-2 rounded-md font-semibold ${
                location.pathname === item.path
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
