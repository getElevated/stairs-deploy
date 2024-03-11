import React, { useState, useEffect, useContext } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Logo from "../assets/Logo.svg"
import AnimationWrapper from "../components/ui/animation"
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { removeFromSession } from "./common/session";
import FlyoutLink from "./DropDown";
import toast from "react-hot-toast";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const {userAuth:{name , email , paymentStatus} , setUserAuth , userAuth:{access_token}} = useContext(UserContext);
  

  

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
    <header
       className={`w-full h-[60px] md:h-[80px] font-poppins  bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
     >
      <Wrapper className="h-[60px] mt-1 flex justify-between items-center">
        <AnimationWrapper>
        <Link to="/">
             <img  className="  h-10 w-24" src={Logo} alt="Logo" />
        </Link>
        </AnimationWrapper>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="flex items-center gap-2 ">
            <div className="text-black   ">
                 <FlyoutLink  FlyoutContent={PricingContent}>
                  <div className="sm:text-base text-xs">
                     {name|| email ||  <>
                       <button className="text-white px-4  bg-black  rounded-lg py-2">Get Started</button>
                     </> }
                  </div>
                 </FlyoutLink>
            </div>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[32px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
    </>
  );
};
const PricingContent = () => {
  const {userAuth:{name} , setUserAuth , userAuth:{access_token}} = useContext(UserContext);
  const Logout = () => {
    removeFromSession("user");
    setUserAuth({ access_token: null });
    toast.success("Loged out succefully 😔")
    return <Navigate to="/"/>
  };
  return (
    <div className="w-64 bg-white border  p-6 shadow-xl">
      <div className="mb-3 space-y-3">
       
       {
        access_token ? (
          <>
           <Link to="/intruction" className="block text-sm hover:underline">
              Test Page
           </Link>
            <Link to="/dashboard" className="block text-sm hover:underline">
               Dashboard
            </Link>
            <Link to="/update" className="block text-sm hover:underline">
              Update Password 
            </Link>
          </>
        ) : (
          <>
           <div className="mb-6 space-y-3">
        <Link to="/intruction" className="block text-sm hover:underline">
           Start Test
        </Link>
        <Link to="/blog" className="block text-sm hover:underline">
          Blog
        </Link>
        <Link to="/about" className="block text-sm hover:underline">
          About
        </Link>
        <Link to="/contact" className="block text-sm hover:underline">
          Contact
        </Link>
      </div>
          </>
        )
       }        
      </div>
     
   {
    access_token ? <button   onClick={Logout} className="  md:text-base text-sm mr-10 border border-black/40 w-full   px-4 py-2 rounded-md bg-black/80 text-white hover:bg-red-300 hover:border-white cursor-pointer"> Logout </button>
     : 
       <div className=" flex flex-col gap-y-4 items-center">
           <Link to="/loginpage" className="  md:text-base  text-sm w-full mr-4 border border-black/40  px-4 py-2 rounded-md cursor-pointer">Login</Link>
           <Link to="/signuppage" className="  md:text-base  text-sm mr-4 w-full border bg-black text-white  border-black/40  px-4 py-2 rounded-md cursor-pointer">SignUp</Link>
         </div>  
   }
  </div>
  );
};

export default Navbar;