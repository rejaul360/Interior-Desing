import logo from "../assets/Logo (6).png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box bg-black text-white mt-5  w-52"
            >
              <li>
                <a className="font_style">HOME </a>
              </li>
              {/* <li>
          <a>Parent</a>
 
        </li> */}
              <li>
                <a className="font_style">ABOUT</a>
              </li>
              <li>
                <a className="font_style">SERVICES</a>
              </li>
              <li>
                <a className="font_style">BLOG</a>
              </li>
            </ul>
          </div>
          <a className=" text-xl">
            <img className=" " src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="nav_item">HOME </a>
            </li>
            <li>
              <a className="nav_item">ABOUT</a>
            </li>
            <li>
              <a className="nav_item">SERVICES</a>
            </li>
            <li>
              <a className="nav_item">BLOG</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn-contact bg-black text-white ">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
