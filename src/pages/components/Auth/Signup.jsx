/* eslint-disable no-unused-vars */
import { RiHome2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

// import { storage } from "../../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { storage } from "../../../firebase/firebase.config";

const SignUp = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const { createUser, updateUser } = useAuth()
    const storageRef = ref(storage, 'photo')
    const axiosPublic = useAxiosPublic()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const onSubmit = async (data) => {
        console.log(data);
        try {
            setIsCreatingAccount(true);
            const { name, photo, email, password } = data
            const photoRef = ref(storage, `photo/${name}-photo.jpg`);
            await uploadBytes(photoRef, photo[0])
            const imageURL = await getDownloadURL(photoRef)

            await createUser(email, password);
            await updateUser(name, imageURL)

            const userInfo = { name, profile: imageURL, email, password }
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('account created successfully')
                    } else {
                        toast.warn('something went wrong')
                    }

                })
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setIsCreatingAccount(false)
        }

    };

    return (
        <div>
            <div className="">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
                    <div className="p-10 hidden lg:block">
                        <img
                            src="https://i.postimg.cc/FHNdFZyh/pawel-czerwinski-Xykx9EE5lFc-unsplash.jpg"
                            alt=""
                            className="h-[600px] w-full"
                        />
                    </div>
                    <div className="items-center space-y-2 p-10">
                        <p className="font-semibold text-3xl">SignUp to</p>
                        <p className="text-3xl lg:text-5xl font-bold text-green-400">Internee</p>
                        <div className="pt-5 space-y-3">
                            <Link to="/">
                                <button className="btn w-full" aria-label="Go to Home">
                                    <RiHome2Fill />
                                    Home
                                </button>
                            </Link>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="divider"></div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="file"
                                    {...register("photo", { required: "Photo is required" })}
                                    accept="image/*"
                                    className="mt-1 p-2 border rounded-md w-[240px] lg:w-full"
                                />
                            </div>
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
                            {isCreatingAccount ? (
                                <div className="flex items-center justify-center">
                                    <span className="loading loading-infinity loading-lg"></span>
                                </div>
                            ) : (
                                <input
                                    type="submit"
                                    value="Create account"
                                    className="btn w-full"
                                />
                            )}
                            <div className="flex justify-between">
                                <p>Already have an account?</p>
                                <Link to="/login">
                                    <p className="underline text-green-300">Login</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;