import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data)
            //   await loginUser(data.email, data.password);
            //   navigate(location?.state ? location.state : "/");
        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Invalid email or password. Please try again.");
        }
    }

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-2">
            <div>

            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control w-full">
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Your Email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    message:
                                        "Password must meet the requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
                                },
                            })}
                            placeholder="Your Password"
                            className="input input-bordered"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <input type="submit" value="Login" className="btn w-full" />
                    <div className="flex justify-between">
                        <p>Dont have an account?</p>
                        <Link to="/signUp">
                            <p className="underline text-green-300">SignUp</p>
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};


export default Login;