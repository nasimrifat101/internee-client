import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

    const { user, logout } = useAuth()
    const isPremium = false


    const navlinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] line-through" : ""
            }>Home</NavLink></li>
        <li><NavLink to='/internships' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] line-through" : ""
            }>Internships</NavLink></li>
        <li><NavLink to='/jobs' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] line-through" : ""
            }>Jobs</NavLink></li>
        {
            isPremium && <li><NavLink to='/recommended' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] line-through" : ""
          }>Recommended</NavLink></li>
        }
        <li><NavLink to='/dashboard' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] line-through" : ""
            }>Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Internee</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <NavLink to='/login' onClick={() => logout()} className="btn">Logout</NavLink>
                            :
                            <NavLink to='/login' className="btn">Login</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;