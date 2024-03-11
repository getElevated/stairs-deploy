import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";
import { IoMdArrowBack } from "react-icons/io";
import logo from "../assets/Logo.svg";
import signupimg from "../assets/signup.jpg";
import { UserContext } from "../App";
import AnimationWrapper from "../components/ui/animation";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import TextAnimation from "../components/common/textanimation";

const ChnagePassword = () => {
  let {
    userAuth: { access_token },
  } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  let changePasswordForm = useRef();
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/change-password`;
    let form = new FormData(changePasswordForm.current);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    let { password, newPassword } = formData;
    if (!password || !newPassword) {
      return toast.error("Fill all the inputs");
    }
    if (!passwordRegex.test(password) || !passwordRegex.test(newPassword)) {
      return toast.error(
        "Password should be 6 to 20 characters long with at least one numeric, one lowercase, and one uppercase character"
      );
    }
    e.target.setAttribute("disabled", true);
    setLoading(true);
    axios
      .put(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        e.target.removeAttribute("disabled");
        setLoading(false);
        toast.success("Password updated succefully");
        return;
      })
      .catch(({ response }) => {
        e.target.removeAttribute("disabled");
        setLoading(false);
        return toast.error(response.data.message);
      });
  };
  return (
    <>
      <Toaster />
      <AnimationWrapper>
        <div className="flex items-center ">
          <div className="hidden md:block">
            <img
              className="h-screen w-full object-cover "
              src={signupimg}
              alt="login image"
            />
          </div>
          <div className="w-full p-4 md:p-0 mt-10 md:mt-0 border-black/40 flex items-center justify-center">
            <button className="absolute md:top-10 top-4 md:left-1/3 left-4 z-40 text-black">
              <Link to="/">
                <IoMdArrowBack className="text-2xl font-semibold" />
              </Link>
            </button>
            <div className="w-96 ">
              <div>
                <div className="flex items-center justify-center">
                  <img
                    className="mb-8 h-full max-w-[200px]"
                    src={logo}
                    alt="Logo"
                  />
                </div>
                <div className="mb-2">
                  <TextAnimation line4="Update password"></TextAnimation>
                </div>
                <p className="sm:text-base mb-2 text-sm ">
                  Enter your current password and new password
                </p>
              </div>
              <form ref={changePasswordForm}>
                <h1 className="max-md:hidden ">Change Password</h1>
                <div className="py-10 w-full md:max-w-[400px]">
                  <input
                    name="password"
                    type="password"
                    className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                    placeholder="Current Password"
                  />
                  <input
                    name="newPassword"
                    type="password"
                    className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                    placeholder="New Password"
                  />
                  <button
                    onClick={handleSubmit}
                    className={`bg-black rounded-sm w-full mt-4 text-white py-2 hover:scale-105 duration-300 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <LuLoader2 className="animate-spin " />
                      </div>
                    ) : (
                      "Change Password"
                    )}
                  </button>
                </div>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
              <div className="text-xs flex items-center sm:py-4 ">
                <Link to="/loginpage">
                  <p className="cursor-pointer">
                    Already have an account?{" "}
                    <span className="text-blue-700 ">Login</span>{" "}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default ChnagePassword;
