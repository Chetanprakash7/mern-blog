import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const location = useLocation().pathname;
  const isActive = (path) => location.pathname === path;
  const {currentUser} = useSelector((state) => state.user);

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
        {/* Search bar (only visible on large screens) */}
        <form className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="text-right"
            aria-label="Search" // Adds accessibility label for search input
          />
        </form>

        {/* Mobile search button */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill aria-label="Open search">
          <AiOutlineSearch />
        </Button>

        {/* Dark mode toggle button (only visible on small screens and above) */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill aria-label="Toggle dark mode">
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                 alt="user"
                 img={currentUser.profilePicture}
                 rounded 
              />
            }
          >
            <Dropdown.Header>
                <span className="block test-sm">@{currentUser.username}</span>
                <span className="block test-sm font-medium truncate">{currentUser.username}</span>
            </Dropdown.Header>\
            <Link to={'/dashboard?tab=profile'}>
            <Dropdown.Item>profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
         </Dropdown>
          
        ):
        
      



        (
          <Link to="/sign-in">
            <Button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-blue-600">
              Sign In
            </Button>
          </Link>
        )
      }


        <Navbar.Toggle />
      </div>

      {/* Collapsible navbar menu for links */}
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


