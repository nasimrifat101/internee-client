
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";

const Sociallogin = () => {
    const { signInWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()


    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                const userinfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    profile: result.user?.photoURL
                }
                axiosPublic.post('/users', userinfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success('Success')
                        }
                    })

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button
                onClick={handleGoogle}
                className="btn w-full">
                <FaGoogle />
                Google
            </button>
            <ToastContainer />
        </div>
    );
};

export default Sociallogin;