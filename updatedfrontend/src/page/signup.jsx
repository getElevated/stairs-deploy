import React, { useContext, useRef, useState } from "react";
import logo from "../assets/Logo.svg";
import signupimg from "../assets/signup.jpg";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { storeInSession } from "../components/common/session";
import TextAnimation from "../components/common/textanimation";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import AnimationWrapper from "../components/ui/animation";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const authForm = useRef();
  const navigate = useNavigate();
  let {
    userAuth: { access_token },
  } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  console.log(access_token);
  const userAuthThroughServer = (formData) => {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/register`;
    axios
      .post(apiUrl, formData)
      .then(({ data }) => {
        storeInSession("user", JSON.stringify(data));
        console.log(sessionStorage);
        console.log(data);
        toast.success("Singup  successful you can login via loginpage");
        setLoading(false);
        authForm.current.reset();
        navigate("/loginpage");
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
        setLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast("Please do agree to our term and condition");
      return;
    }
    setLoading(true);
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;

    let form = new FormData(authForm.current);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    for (let key in formData) {
      if (!formData[key]) {
        toast.error(
          `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`
        );
        setLoading(false);
        return;
      }
    }
    let { email, password, name, phone, gender } = formData;
    if (name) {
      if (name?.length < 3 || name?.length === 0) {
        toast.error("Name must be 3 Char Long");
        setLoading(false);
        return;
      }
    }
    if (phone) {
      if (phone.length < 10 || phone.length < 10) {
        toast.error("Phone no should be 10 char long");
        setLoading(false);
        return;
      }
    }
    if (!email?.length) {
      toast.error("Enter Email");
      setLoading(false);
      return;
    }
    if (!formData.city) {
      toast.error("Enter City");
      setLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email is invalid");
      setLoading(false);
      return;
    }

    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      toast.error('Invalid gender. Please enter "male," "female," or "other"');
      setLoading(false);
      return;
    }
    userAuthThroughServer(formData);
  };
  return access_token ? (
    <Navigate to="/" />
  ) : (
    <AnimationWrapper>
      <div className="flex  items-center ">
        <div className="hidden md:block">
          <img
            className="h-screen object-center object-cover "
            src={signupimg}
            alt="login image"
          />
        </div>
        <div className="w-full p-4 md:p-0 mt-10 md:mt-0 border-black/40 flex items-center justify-center">
          <button className="absolute md:top-10 top-4 md:left-1/3 left-4  z-40 text-black">
            <Link to="/">
              <IoMdArrowBack className="text-2xl font-semibold" />
            </Link>
          </button>
          <div className="w-96 ">
            <div>
              <div className="flex items-center justify-center">
                <img
                  className="mb-8  w-[200px]  md:max-w-[140px]"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <div className="mb-2">
                <TextAnimation line4="Please Sign Up"></TextAnimation>
              </div>
              <p className="sm:text-base mb-2 text-sm ">Be a part of us</p>
            </div>
            <form ref={authForm} className="flex flex-col md:gap-2">
              <div className="flex md:flex-row flex-col md:gap-x-2 ">
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-x-2 ">
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex text-black md:flex-row flex-col md:gap-x-2 ">
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                  type="number"
                  name="phone"
                  placeholder="Phone No"
                />
                <select
                  className="p-2 text-black/40  focus:outline-black/40 rounded-sm bg-[#f3f3f3] mt-2 border w-full"
                  name="gender"
                  defaultValue=""
                >
                  <option className="text-black" value="" disabled>
                    Gender
                  </option>
                  <option className="text-black" value="male">
                    Male
                  </option>
                  <option className="text-black" value="female">
                    Female
                  </option>
                  <option className="text-black" value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="flex md:flex-row flex-col md:gap-x-2 ">
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-2 border w-full"
                  type="text"
                  name="college"
                  placeholder="College"
                />
              </div>

              <div className="flex md:flex-row flex-col md:gap-x-2 ">
                <select
                  className="p-2 focus:outline-black/40 text-black/40 rounded-sm bg-[#f3f3f3] mt-2 border w-full"
                  name="department"
                  defaultValue=""
                >
                  <option className="text-black" value="" disabled>
                    Department
                  </option>
                  <option className="text-black" value="Computer Science">
                    Computer Science
                  </option>
                  <option className="text-black" value="Information Technology">
                    Information Technology
                  </option>
                  <option className="text-black" value="Mechanical">
                    Mechanical
                  </option>
                  <option className="text-black" value="Electrical">
                    Electrical
                  </option>
                  <option
                    className="text-black"
                    value="Electronics and Communication"
                  >
                    Electronics and Communication
                  </option>
                  <option className="text-black" value="Civil">
                    Civil
                  </option>
                  <option className="text-black" value="Automobile">
                    Automobile
                  </option>
                  <option className="text-black" value="others">
                    Others
                  </option>
                </select>

                <select
                  className="p-2 focus:outline-black/40 text-black/40 rounded-sm bg-[#f3f3f3] mt-2 border w-full"
                  name="currentYear"
                  defaultValue="4"
                >
                  <option value="" disabled>
                    Current Year
                  </option>
                  <option className="text-black" value="1">
                    1
                  </option>
                  <option className="text-black" value="2">
                    2
                  </option>
                  <option className="text-black" value="3">
                    3
                  </option>
                  <option className="text-black" value="4">
                    4
                  </option>
                </select>
              </div>

              <div className="flex md:flex-row flex-col md:gap-x-2">
                <select
                  className="p-2 text-black/40  focus:outline-black/40 rounded-sm bg-[#f3f3f3] mt-2 border w-full"
                  name="state"
                  defaultValue=""
                >
                  <option className="text-black" value="" disabled>
                    {" "}
                    State
                  </option>
                  <option className="text-black" value="Andhra Pradesh">
                    Andhra Pradesh
                  </option>
                  <option className="text-black" value="Arunachal Pradesh">
                    Arunachal Pradesh
                  </option>
                  <option className="text-black" value="Assam">
                    Assam
                  </option>
                  <option className="text-black" value="Bihar">
                    Bihar
                  </option>
                  <option className="text-black" value="Chhattisgarh">
                    Chhattisgarh
                  </option>
                  <option className="text-black" value="Goa">
                    Goa
                  </option>
                  <option className="text-black" value="Gujarat">
                    Gujarat
                  </option>
                  <option className="text-black" value="Haryana">
                    Haryana
                  </option>
                  <option className="text-black" value="Himachal Pradesh">
                    Himachal Pradesh
                  </option>
                  <option className="text-black" value="Jharkhand">
                    Jharkhand
                  </option>
                  <option className="text-black" value="Karnataka">
                    Karnataka
                  </option>
                  <option className="text-black" value="Kerala">
                    Kerala
                  </option>
                  <option className="text-black" value="Madhya Pradesh">
                    Madhya Pradesh
                  </option>
                  <option className="text-black" value="Maharashtra">
                    Maharashtra
                  </option>
                  <option className="text-black" value="Manipur">
                    Manipur
                  </option>
                  <option className="text-black" value="Meghalaya">
                    Meghalaya
                  </option>
                  <option className="text-black" value="Mizoram">
                    Mizoram
                  </option>
                  <option className="text-black" value="Nagaland">
                    Nagaland
                  </option>
                  <option className="text-black" value="Odisha">
                    Odisha
                  </option>
                  <option className="text-black" value="Punjab">
                    Punjab
                  </option>
                  <option className="text-black" value="Rajasthan">
                    Rajasthan
                  </option>
                  <option className="text-black" value="Sikkim">
                    Sikkim
                  </option>
                  <option className="text-black" value="Tamil Nadu">
                    Tamil Nadu
                  </option>
                  <option className="text-black" value="Telangana">
                    Telangana
                  </option>
                  <option className="text-black" value="Tripura">
                    Tripura
                  </option>
                  <option className="text-black" value="Uttar Pradesh">
                    Uttar Pradesh
                  </option>
                  <option className="text-black" value="Uttarakhand">
                    Uttarakhand
                  </option>
                  <option className="text-black" value="West Bengal">
                    West Bengal
                  </option>
                </select>
                <input
                  className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3] mt-2 border w-full"
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              {loading ? (
                <>
                  <p className="bg-black rounded-sm flex items-center justify-center text-white py-2 hover:scale-105 duration-300">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  </p>
                </>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-black rounded-sm text-white py-2 hover:scale-105 duration-300"
                >
                  Sign Up
                </button>
              )}
            </form>
            <div className="flex  mt-2 items-center">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="mr-2"
                onChange={() => setIsChecked(!isChecked)}
              />
              <label className="text-xs" htmlFor="agreement">
                I agree to the{" "}
              </label>
              <Link className="text-blue-600 text-xs" to="/privacy">
                Term & Condition
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className=" text-xs flex  items-center   sm:py-4 ">
              <Link to="/loginpage">
                <p className="cursor-pointer">
                  Allready have a account{" "}
                  <span className="text-blue-700 ">login</span>{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};
export default Signup;
