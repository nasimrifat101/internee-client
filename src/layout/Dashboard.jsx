import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  let navlinks;
  const isAdmin = true
  const isManager = false
  const isEmployer = false


  if (isAdmin) {
    navlinks = (
      <>
        <li>
          <NavLink to='/dashboard/allemployer' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            All Employers
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/allusers' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            All Users
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/alljobs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            All Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/approve' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Approve Employers
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/stats'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Stats
          </NavLink>
        </li>
      </>
    );
  } else if (isManager) {
    navlinks = (
      <>
        <li><NavLink>All Users</NavLink></li>
        <li><NavLink>All Jobs</NavLink></li>
        <li><NavLink>Approve Employers</NavLink></li>
        <li><NavLink>Banned Employers</NavLink></li>
        <li><NavLink>Banned Users</NavLink></li>
        {/* Additional manager-specific links */}
      </>
    );
  }
  else if (isEmployer) {
    navlinks = (
      <>
        <li><NavLink>Profile</NavLink></li>
        <li><NavLink>Messages</NavLink></li>
        <li><NavLink>Posted Jobs</NavLink></li>
        <li><NavLink>job Candidates</NavLink></li>
        {/* Additional employer-specific links */}
      </>
    );
  } else {
    // Default for regular users
    navlinks = (
      <>
        <li><NavLink>Profile</NavLink></li>
        <li><NavLink>Messages</NavLink></li>
        <li><NavLink>Applied Jobs</NavLink></li>
        <li><NavLink>Saved Jobs</NavLink></li>
        <li><NavLink>Upgrade Membership</NavLink></li>

      </>
    );
  }

  return (
    <div className="flex">
      <div className="w-1/5 bg-base-200 h-screen">
        <div>
          <p className="text-2xl font-bold text-center py-5">Dashboard</p>
          <ul className="menu space-y-2">
            {navlinks}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Dashboard;