import React from "react";
import { Link } from "react-router-dom";
import AnimationWrapper from "./ui/animation";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Blog", url: "/blog" },
  { id: 3, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Test", url: "/intruction" },
];

const Menu = () => {
  return (
      <ul className="hidden md:flex items-center gap-8 font-medium ">
      {data.map((item) => {
        return (
          <AnimationWrapper>
          <React.Fragment key={item.id}>
              <li className="cursor-pointer">
                <Link to={item?.url}>{item.name}</Link>
              </li>
          </React.Fragment>
          </AnimationWrapper>
        )
      })}
    </ul>
  );
};

export default Menu;