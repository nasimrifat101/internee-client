/* eslint-disable react/prop-types */

import useAuth from "../../../hooks/useAuth";

const NavWithSearch = ({ name, value, set }) => {
    const { user, logout } = useAuth()
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">{name ? name : ""}</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={value} onChange={(e) => set(e.target.value)} />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit">

                            <li><a onClick={() => logout()}>Logout</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavWithSearch;