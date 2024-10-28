import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const location = useLocation(); // Get current location object

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          CVK's
        </span>
        Blog
      </Link>

      <div className="flex items-center gap-2 ml-auto">
        <form className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="text-right"
          />
        </form>

        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            Sign In
          </Button>
        </Link>

        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle />
      </div>

      {/* Wrap the links inside Navbar.Collapse for toggling */}
      <Navbar.Collapse>
        <div className="flex flex-col lg:flex-row gap-4 ml-auto">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-blue-500 font-bold" : "text-gray-700"
            } hover:text-gray-900 dark:text-white`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about") ? "text-blue-500 font-bold" : "text-gray-700"
            } hover:text-gray-900 dark:text-white`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              isActive("/projects") ? "text-blue-500 font-bold" : "text-gray-700"
            } hover:text-gray-900 dark:text-white`}
          >
            Projects
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
