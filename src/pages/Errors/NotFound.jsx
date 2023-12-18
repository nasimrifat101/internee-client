/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center bg-[#ffdc93] h-screen">
           <div>
           <p className="text-base-200 text-center text-xl pb-14">you musn't be here</p>
            <img src="https://i.postimg.cc/660JqCNV/Group-34.png" alt="404"  className="w-[600px]"/>
            <p className="text-center text-xl pt-14"><NavLink to="/" className="btn btn-outline text-base-200 hover:bg-green-300 hover:border-none">go home</NavLink></p>
           </div>
        </div>
    );
};

export default NotFound;