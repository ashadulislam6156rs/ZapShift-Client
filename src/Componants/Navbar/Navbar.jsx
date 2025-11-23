import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import Logo from '../Logo';
import { MdArrowOutward } from 'react-icons/md';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
const links = [
  <NavLink to={"/services"}>Services</NavLink>,
  <NavLink>About Us</NavLink>,
  <NavLink to={"/coverage"}>Coverage</NavLink>,
  <NavLink to={"/sendParcel"}>Send Parcel</NavLink>,
  <NavLink>Blog</NavLink>,
  <NavLink>Contact</NavLink>,
];
  
  const { user, userLogOut, setUser } = useAuth();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        setUser(null);
        toast.success("Your LogOut Successfull.")
      })
    .catch(err => toast.error(err.message))
  }
    
    return (
      <Container>
        <div>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
              <Link to={"/"}>
                <Logo></Logo>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
            <div className="navbar-end gap-2">
              {user ? (
                <button onClick={handleLogOut} className="btn btn-outline">LogOut</button>
              ) : (
                <Link to={"/register"} className="btn btn-outline">
                  Sign In
                </Link>
              )}

              <button className="btn btn-accent">Be a rider</button>
              <button className="btn btn-circle btn-neutral">
                <MdArrowOutward className="text-2xl font-bold" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;