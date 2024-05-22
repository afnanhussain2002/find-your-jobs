import { NavLink } from "react-router-dom";


const Header = () => {
  const menu =<>

      <li><NavLink 
      to={'/'}
      className={({ isActive, isPending }) =>
        isPending ? "text-sky-500" : isActive ? "text-sky-500 bg-none" : ""
      }
      >Home </NavLink></li>

      <li><NavLink 
      to={'/appliedJobs'}
      className={({ isActive, isPending }) =>
        isPending ? "text-sky-500" : isActive ? "text-sky-500" : ""
      }
      >Applied Jobs </NavLink></li>

      <li><NavLink 
      to={'/blog'}
      className={({ isActive, isPending }) =>
        isPending ? "text-sky-500" : isActive ? "text-sky-500" : ""
      }
      >Blog </NavLink></li>
      
  </>
    return (
        <>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
       {menu}
      </ul>
    </div>
    <a className=" text-xl font-bold">Find Your Jobs</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-md bg-sky-500 text-white font-bold">Start Applying</a>
  </div>
</div>
        </>
    );
};

export default Header;