import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Intruction = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      // Navigate to main page
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
        <Wrapper>
          <div className="flex  mt-8 justify-center flex-col">
            <div className="mt-2">
              <h1 className="sm:text-2xl text-xl font-semibold">
                General Test Intruction
              </h1>
              <ul className="list-disc ml-8">
                <li>
                  The test contains 4 sections, and each section is allotted
                  specific time.
                </li>
                <li>
                  Each question has 4 options out of which only one is correct.
                </li>
                <li>You must finish test within 30 mins or before that</li>
                <li>
                  There is no penalty for the questions that you have not
                  attempted
                </li>
                <li>Each correct answer will award you +1 score.</li>
                <li>There is no negative marking in the test.</li>
                <li>
                  Once you start the test, you’ll not be allowed to change the
                  browser.
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <h1 className="sm:text-2xl text-xl font-semibold">
                Others Test Intruction
              </h1>
              <ul className="list-disc ml-8 mt-2">
                <li>
                  The test contains all the questions from Verbal section.
                </li>
                <li>
                  Each question has 4 options out of which only one is correct.
                </li>
                <li>You must finish test within 20 mins or before that</li>
                <li>
                  There is no penalty for the questions that you have not
                  attempted
                </li>
                <li>Each correct answer will award you +1 score</li>
                <li>There is no negative marking in the test.</li>
                <li>
                  Once you start the test, you’ll not be allowed to change the
                  browser
                </li>
              </ul>
            </div>

            <p className="mt-2 text-lg font-semibold">
              Read the following instructions carefully.
            </p>
            <p className="mt-2 p-2 ">
              I have read all the instructions carefully and have understood
              them. I agree not to cheat or use unfair means in this
              examination. I understand that using unfair means of any sort for
              my own or someone else’s advantage will lead to my immediate
              disqualification. The decision of STAIRS will be final in these
              matters and cannot be appealed.
            </p>
            <label className="flex items-center mt-4">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 inline-block ">
                I have read all the instructions carefully.
              </span>
            </label>
            <Link to="/main" className="p-2">
              <button
                className={`bg-black px-4 py-2 rounded-lg text-white ${
                  !isChecked && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleButtonClick}
                disabled={!isChecked}
              >
                Understand
              </button>
            </Link>
          </div>
        </Wrapper>
        <Footer />
      </div>
    </>
  );
};

export default Intruction;
