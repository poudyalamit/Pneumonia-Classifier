import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Symptoms", path: "symptoms" },
    { title: "Infection", path: "infection" },
    { title: "Prevention", path: "prevention" },
    { title: "About Us", path: "about" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-6 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img src="logo.jpg" width={120} height={50} alt="Float UI logo" />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border "
              onClick={() => setState(!state)}
            >

            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 text-semibold text-xl md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-600 text-xl px-6 hover:text-indigo-600"
              >
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset to your needs
                  duration={500} // You can adjust the duration as well
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
