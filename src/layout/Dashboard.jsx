import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  let navlinks;
  const isAdmin = false
  const isManager = false
  const isEmployer = false


  if (isAdmin) {
    navlinks = (
      <>

        <li>
          <NavLink to='/dashboard/approve' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Approve Employers
          </NavLink>
        </li>


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
            All Posted Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/bannedemployers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Banned Employers
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/bannedusers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Banned Users
          </NavLink>
        </li>

        <div className="divider"></div>

        <li>
          <NavLink to='/dashboard/myemployees'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            My Employees
          </NavLink>
        </li>


        <li>
          <NavLink to='/dashboard/stats'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Statistics
          </NavLink>
        </li>

        <div className="divider"></div>

        <li>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Home
          </NavLink>
        </li>

      </>
    );
  } else if (isManager) {
    navlinks = (
      <>
        <li>
          <NavLink to='/dashboard/approve' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Approve Employers
          </NavLink>
        </li>


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
            All Posted Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/bannedemployers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Banned Employers
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/bannedusers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
            }>
            Banned Users
          </NavLink>
        </li>

        <div className="divider"></div>

        <li>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Home
          </NavLink>
        </li>
      </>
    );
  }
  else if (isEmployer) {
    navlinks = (
      <>

        <li>
          <NavLink to='/dashboard/profile' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Profile
          </NavLink>
        </li>


        <li>
          <NavLink to='/dashboard/postedjobs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Posted Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/jobcandidates' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Job Candidates
          </NavLink>
        </li>


        <li>
          <NavLink to='/dashboard/messages' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Messages
          </NavLink>
        </li>

        <div className="divider"></div>
        
        <li>
          <NavLink to='/dashboard/employerstats' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
           Stats
          </NavLink>
        </li>

        <li>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Home
          </NavLink>
        </li>
      </>
    );
  } else {
    // Default for regular users
    navlinks = (
      <>
         <li>
          <NavLink to='/dashboard/profile' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Profile
          </NavLink>
        </li>

         <li>
          <NavLink to='/dashboard/messages' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Messages
          </NavLink>
        </li>

         <li>
          <NavLink to='/dashboard/appliedjobs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Applied Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/savedjobs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Saved Jobs
          </NavLink>
        </li>

        <li>
          <NavLink to='/dashboard/upgrade' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Upgrade Membership
          </NavLink>
        </li>

        <div className="divider"></div>
        <li>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] bg-base-300" : "bg-base-100"
          }>
            Home
          </NavLink>
        </li>

      </>
    );
  }

  return (
    <div className="flex">
      <div className="w-1/5 bg-base-200 h-screen">
        <div>
          <p className="text-xl font-bold text-center py-5">Dashboard</p>
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