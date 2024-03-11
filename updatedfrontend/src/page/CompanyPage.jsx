import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import AnimationWrapper from "../components/ui/animation";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../App";
import HclLogo from "../assets/hcl.png";
import DeloitteLogo from "../assets/deloitte.png";
import AccentureLogo from "../assets/accenture.png";
import TcsLogo from "../assets/tcs.png";
import VerbalLogo from "../assets/testassets/verbal.jpg";
import QuantLogo from "../assets/testassets/quant.png";
import LogicalLogo from "../assets/testassets/logical.jpg";
import ProgramingLogo from "../assets/testassets/programing.jpg";
import GeneralLogo from "../assets/testassets/general.jpg";
import Amcat from "../assets/testassets/amcat.png";
import Cocubes from "../assets/testassets/cocubes.png";
import Elitmas from "../assets/testassets/elitmas.png";
import Practice from "../assets/testassets/prectice.png";
import { Toaster, toast } from "sonner";

const CompanyPage = () => {
  const navigate = useNavigate();

  let {
    userAuth: { access_token, paymentStatus },
    setUserAuth,
  } = useContext(UserContext);
  let userId = "";
  try {
    const decodedToken = jwtDecode(access_token);
    console.log(decodedToken);
    userId = decodedToken.userId;
  } catch (error) {
    console.error("Error decoding JWT:", error.message);
  }

  const startTest = (companyName) => {
    if (companyName === "FreeMock") {
      // For FreeMock test, initiate the test directly without checking payment status
      if (localStorage.getItem("test")) {
        localStorage.removeItem("test");
      }
      localStorage.setItem(
        "test",
        JSON.stringify({
          userId: userId,
          answers: [],
        })
      );
      navigate("/test", { state: { companyName: companyName } });
    } else {
      // For other tests, check payment status before initiating the test
      if (paymentStatus === true) {
        if (localStorage.getItem("test")) {
          localStorage.removeItem("test");
        }
        localStorage.setItem(
          "test",
          JSON.stringify({
            userId: userId,
            answers: [],
          })
        );
        navigate("/test", { state: { companyName: companyName } });
      } else {
        toast("Please make payment or try again later");
      }
    }
  };

  const getCompanyLogo = (companyName) => {
    switch (companyName) {
      case "HCL":
        return HclLogo;
      case "Deloitte":
        return DeloitteLogo;
      case "Accenture":
        return AccentureLogo;
      case "TCS":
        return TcsLogo;
      default:
        return null;
    }
  };

  const freeMockCards = [
    {
      name: "FreeMock",
      description: "FreeMock Test",
      buttonText: "Start Test",
      logo: VerbalLogo,
    },
  ];
  const skillPracticeCards = [
    {
      name: "verbal",
      description: "Verbal Reasoning",
      buttonText: "Start Test",
      logo: VerbalLogo,
    },
    {
      name: "quant",
      description: "Quant Reasoning",
      buttonText: "Start Test",
      logo: QuantLogo,
    },
    {
      name: "logical",
      description: "Logical Reasoning",
      buttonText: "Start Test",
      logo: LogicalLogo,
    },
    {
      name: "programming",
      description: "Programming Question",
      buttonText: "Start Test",
      logo: ProgramingLogo,
    },
  ];
  const practiceTestCard = [
    {
      name: "precticetest",
      description: "Practice Test",
      buttonText: "Start now",
      logo: Practice,
    },
    {
      name: "amcat",
      description: "AMCAT Test",
      buttonText: "Start Test",
      logo: Amcat,
    },
    {
      name: "elitmus",
      description: "eLitmus Test",
      buttonText: "Start Test",
      logo: Elitmas,
    },
    {
      name: "cocubes",
      description: "CoCubes Test",
      buttonText: "Start Test",
      logo: Cocubes,
    },
  ];
  const companyTestCards = [
    {
      name: "HCL",
      description:
        "You will get all the questions that already appeared in HCL company",
      buttonText: "Start now",
    },
    {
      name: "Accenture",
      description:
        "You will get all the questions that already appeared in Accenture company",
      buttonText: "Start Test",
    },
    {
      name: "Deloitte",
      description:
        "You will get all the questions that already appeared in Deloitte company",
      buttonText: "Start Test",
    },
    {
      name: "TCS",
      description:
        "You will get all the questions that already appeared in TCS company",
      buttonText: "Start Test",
    },
  ];
  const getButtonText = (paymentStatus, buttonText, testName) => {
    if (testName === "FreeMock") {
      return buttonText;
    } else {
      return paymentStatus ? (
        buttonText
      ) : (
        <div className="">
          <h1 className="flex items-center justify-center gap-x-1">
            Locked
            <FaLock />
          </h1>{" "}
        </div>
      );
    }
  };

  return (
    <div>
      <Toaster />
      <Navbar />
      <Wrapper>
        <AnimationWrapper>
          <div className="h-full">
            <div>
              <h1 className="mt-10 sm:text-2xl font-poppins font-semibold text-xl mb-10 md:text-3xl lg:text-4xl">
                Free Mock
              </h1>
            </div>
            <div className="flex no-scrollbar overflow-x-scroll gap-x-4 mt-4">
              {freeMockCards.map((card, index) => (
                <div
                  key={index}
                  className="lg:w-[280px] h-80 w-[240px] bg-gradient-to-b from-Primary to-white p-10 rounded-lg flex flex-col items-center justify-center border"
                >
                  <div className="mb-2 rounded-full bg-white">
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="w-24 h-24 p-1 object-contain rounded-full"
                    />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {card.description.split(" ")[0]}
                  </h2>
                  <h2 className="text-3xl font-bold">
                    {card.description.split(" ")[1]}
                  </h2>
                  <button
                    onClick={() => startTest(card.name)}
                    className="text-white hover:opacity-90 text-sm bg-black w-full mt-10 rounded-lg py-2"
                  >
                    Free Mock
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h1 className="mt-10 sm:text-2xl font-poppins font-semibold text-xl mb-10 md:text-3xl lg:text-4xl">
                Let's Practice...
              </h1>
            </div>
            <div className="flex no-scrollbar overflow-x-scroll gap-x-4 mt-4">
              {skillPracticeCards.map((card, index) => (
                <div
                  key={index}
                  className="lg:w-[280px] h-80 w-[240px] bg-gradient-to-b from-Primary to-white p-10 rounded-lg flex flex-col items-center justify-center border"
                >
                  <div className="mb-2 rounded-full bg-white">
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="w-24 h-24 p-1 object-contain rounded-full"
                    />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {card.description.split(" ")[0]}
                  </h2>
                  <h2 className="text-3xl font-bold">
                    {card.description.split(" ")[1]}
                  </h2>
                  <button
                    onClick={() => startTest(card.name)}
                    className="text-white hover:opacity-90 text-sm bg-black w-full mt-10 rounded-lg py-2"
                  >
                    {getButtonText(paymentStatus, card.buttonText)}
                  </button>
                </div>
              ))}
            </div>

            <h1 className="mt-10 sm:text-2xl font-poppins font-semibold text-xl mb-10 md:text-3xl lg:text-4xl">
              Let's Prepare For
            </h1>
            {/* Practice Test Cards */}
            <div className="flex no-scrollbar overflow-x-scroll gap-x-4 mt-4">
              {practiceTestCard.map((card, index) => (
                <div
                  key={index}
                  className="lg:min-w-[280px] h-80 min-w-[240px] bg-gradient-to-b from-Primary to-white p-8 rounded-lg flex flex-col items-center justify-center border "
                >
                  <div className="mb-2 rounded-full bg-white">
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="w-24 h-24 rounded-full object-contain p-2 object-center"
                    />
                  </div>
                  <h1 className="text-3xl font-bold">
                    {card.description.split(" ")[0]}
                  </h1>
                  <h1 className="text-3xl font-bold text-center">
                    {card.description.split(" ")[1]}
                  </h1>
                  <button
                    onClick={() => startTest(card.name)}
                    className="text-white w-full text-sm hover:opacity-90 bg-black px-4 rounded-lg mt-2 py-2"
                  >
                    {getButtonText(paymentStatus, card.buttonText)}
                  </button>
                </div>
              ))}
            </div>
            <p className="md:hidden flex items-center gap-x-2 mt-2 ml-2 text-sm">
              {" "}
              <FaArrowLeft /> Scroll left
            </p>
            <h1 className="mt-10 sm:text-2xl font-poppins font-semibold text-xl mb-10 md:text-3xl lg:text-4xl">
              Company Specific Test
            </h1>
            <div className="no-scrollbar overflow-x-scroll flex items-center gap-x-4">
              {companyTestCards.map((card, index) => (
                <div
                  key={index}
                  className="lg:min-w-[280px] h-80 min-w-[240px] bg-gradient-to-b from-Primary to-white p-8 rounded-lg flex flex-col items-center justify-center border "
                >
                  <div className="mb-2 rounded-full bg-white">
                    <img
                      src={getCompanyLogo(card.name)}
                      alt="company logo"
                      className="w-24 h-24 object-contain p-2 rounded-full"
                    />
                  </div>
                  <h2 className="md:text-base text-sm text-center text-black">
                    {card.description}
                  </h2>
                  <button
                    onClick={() => startTest(card.name)}
                    className="text-white hover:opacity-90 text-sm bg-black w-full mt-10 rounded-lg py-2"
                  >
                    {getButtonText(paymentStatus, card.buttonText)}
                  </button>
                </div>
              ))}
            </div>
            <p className="md:hidden flex items-center gap-x-2 mt-2 ml-2 text-sm">
              {" "}
              <FaArrowLeft /> Scroll left
            </p>
          </div>
        </AnimationWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default CompanyPage;
