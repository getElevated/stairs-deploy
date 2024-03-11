import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <div>
            <img
              className="max-w-md"
              src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1705598420/empty_u3jzi3.png"
              alt="notfound"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-7xl  font-semibold text-black/80">404</h1>
            <p className="text-lg  text-center">
              Looks like the page you looking <br /> for not exists
            </p>
            <Link
              to="/"
              className="bg-black/90 rounded-lg mt-4 text-white px-8 py-2"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotfoundPage;
