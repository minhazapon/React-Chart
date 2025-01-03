import { NavLink } from "react-router-dom";



const Nav = () => {

    const  NAVZ = <>
    
      <li><NavLink to='/'>Home</NavLink></li>
      <li ><NavLink to='/chart1'>chart</NavLink></li>
      <li ><NavLink to='/chart2'>chart2</NavLink></li>
    
    
    </>


    return (
        <div>


        <div className="navbar bg-base-100 shadow p-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                 {NAVZ}
              </ul>
            </div>
            <div className=" nav-flex ">
                <img src="https://cdn-icons-png.flaticon.com/128/753/753244.png" height='50px' width='50px' alt="" />
                <a className=" route-text text-xl">Re Route</a>
            </div>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {NAVZ}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
                    
        </div>
    );
};

export default Nav;