import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

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
            {
                users?.map(i=> <p key={i._id}>{i.name}</p>)
            }
        </div>
    );
};

export default AllUsers;