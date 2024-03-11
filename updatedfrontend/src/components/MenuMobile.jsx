import React from "react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Blog", url: "/blog" },
  { id: 3, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Test", url: "/intruction" },
  { id: 5, name: "Login", url: "/loginpage" },
  { id: 5, name: "Signup", url: "/signuppage" },
  { id: 6, name: "Latestscore", url: "/result" },
];
const MenuMobile = ({
  setMobileMenu,
}) => {
  return (
    <ul className="flex flex-col md:hidden  bg-white  font-poppins text-black   absolute top-[50px] left-0 w-full h-[calc(100vh-50px)]  border-t ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
              <li className="py-4 px-5 border-b">
                <Link to={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}</Link>
              </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;