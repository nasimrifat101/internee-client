import useAuth from "../../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const Sociallogin = () => {
    const { signInWithGoogle } = useAuth()

    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
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
                SignUp with Google
            </button>
        </div>
    );
};

export default Sociallogin;