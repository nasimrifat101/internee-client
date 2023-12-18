import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import NavWithSearch from "../reusableNavbar/NavWithSearch";

const AllUsers = () => {
    const [users, setUsers] = useState([])
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [axiosPublic])
    return (
        <div>
            <NavWithSearch name={`Total Users: ${users.length} `} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((item, idx) => (
                                    <tr key={idx}>
                                      
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.profile} alt={`${item.name}'s profile`} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <td>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;