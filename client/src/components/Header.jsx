import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const isActive = (path) => location === path;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar className="border-b-2">
      {/* Logo Section */}
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
        {/* Search Bar (visible on large screens) */}
        <form className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="text-right"
            aria-label="Search"
          />
        </form>

        {/* Mobile Search Icon */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill aria-label="Open search">
          <AiOutlineSearch />
        </Button>

        {/* Dark Mode Toggle Button */}
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          <FaMoon />
        </Button>

        {/* Conditional Rendering for User Dropdown or Sign In Button */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.username}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-blue-600">
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      {/* Collapsible Navbar Menu for Links */}
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

 