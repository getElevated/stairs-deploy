import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { UserContext } from "../../App";
import Wrapper from "../Wrapper";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmationModal from "../common/confirmbox";
import Logo from "../../assets/Logo.svg";

import Loader from "../common/loader";
import Tooltip from "../ui/tooltip";

const AllTestPage = () => {
  const location = useLocation();
  let companyPath = location.state?.companyName;
  console.log(companyPath);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isTimerRunning) {
        setTimeLeft((prevTime) => prevTime - 1);
        if (timeLeft <= 0) {
          setIsTimerRunning(false);
        }
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, timeLeft]);
  const handleTimerExpiry = () => {
    TestSubmit();
  };
  useEffect(() => {
    if (!isTimerRunning && timeLeft <= 0) {
      handleTimerExpiry();
    }
  }, [isTimerRunning]);

  const {
    userAuth: { name, email, user },
    setUserAuth,
    userAuth: { access_token },
  } = useContext(UserContext);
  const navigate = useNavigate();

  let userId = "";
  let userEmail = "";
  let userName = "";
  try {
    const decodedToken = jwtDecode(access_token);
    userName = decodedToken.name;
    userId = decodedToken.userId;
  } catch (error) {
    console.error("Error decoding JWT:", error.message);
  }
  const [questions, setQuestions] = useState([]);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [questionButtons, setQuestionButtons] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [showQuestionMenu, setShowQuestionMenu] = useState(true);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Toggle function to open/close question menu
  const toggleQuestionMenu = () => {
    setShowQuestionMenu((prev) => !prev);
  };

  // Function to close question menu
  const closeQuestionMenu = () => {
    setShowQuestionMenu(false);
  };

  let apiUrl;
  if (
    companyPath === "verbal" ||
    companyPath === "quant" ||
    companyPath === "logical" ||
    companyPath === "programming"
  ) {
    apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/quiz/questions/practice/${companyPath}`;
  } else if (companyPath === "precticetest" || companyPath === "FreeMock") {
    apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/quiz/questions/test/${companyPath}`;
  } else {
    apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/quiz/questions/${companyPath}`;
  }

  // console.log(apiUrl)
  const getVerbal = async () => {
    if (access_token) {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const initialSelectedOptions = {};
        setLoading(false);
        console.log(response.data.length);
        const firstQuestion = response.data[0];
        if (firstQuestion && firstQuestion.companyName) {
          setCompanyName(firstQuestion.companyName);
        }
        response.data.forEach((question, index) => {
          initialSelectedOptions[question._id] = "";
          if (question.subQuestions) {
            question.subQuestions.forEach((subQuestion, subIndex) => {
              initialSelectedOptions[`${question._id}-${subIndex}`] = "";
            });
          }
        });
        setSelectedOptions(initialSelectedOptions);
        setQuestions(
          response.data.map((question, index) => ({
            ...question,
            number: index + 1,
          }))
        );
      } catch (error) {
        console.error("Error fetching verbal data:", error);
        setLoading(false);
      }
    } else {
      console.error("No access token available");
      setLoading(false);
    }
  };
  useEffect(() => {
    getVerbal();
  }, [access_token]);

  const updateMarkedQuestions = () => {
    const updatedMarkedQuestions = [];
    questions.forEach((question, index) => {
      const questionId = question._id;
      const isSelected = selectedOptions[questionId] !== "";
      if (isSelected) {
        updatedMarkedQuestions.push(index + 1);
      }
    });
    setMarkedQuestions(updatedMarkedQuestions);
  };

  console.log(markedQuestions);
  const handleOptionChange = (questionId, selectedOption, section) => {
    console.log(questionId, selectedOption);
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: selectedOption,
    }));

    updateMarkedQuestions();
    const localStorageTestData = JSON.parse(localStorage.getItem("test"));
    const index = localStorageTestData.answers?.findIndex(
      (answer) => answer.section === section
    );
    const QuestionSection = [...localStorageTestData.answers];
    if (index !== -1) {
      const qIndex = QuestionSection[index].questions?.findIndex(
        (question) => question.qId === questionId
      );
      if (qIndex !== -1) {
        QuestionSection[index].questions[qIndex].selOpt = selectedOption;
      } else {
        QuestionSection[index].questions.push({
          qId: questionId,
          selOpt: selectedOption,
        });
      }
    } else {
      QuestionSection.push({
        section: section,
        questions: [{ qId: questionId, selOpt: selectedOption }],
      });
    }
    const finalLocalStorageData = {
      userId: localStorageTestData.userId,
      companyName: companyName,
      answers: QuestionSection,
    };
    localStorage.removeItem("test");
    localStorage.setItem("test", JSON.stringify(finalLocalStorageData));
  };

  useEffect(() => {
    const testObject = JSON.parse(localStorage.getItem("test"));
    if (!testObject) {
      navigate("/main");
    }
  }, []);

  const showNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        setVisitedQuestions((prevVisited) =>
          prevVisited.includes(nextIndex)
            ? prevVisited
            : [...prevVisited, nextIndex]
        );
        return nextIndex;
      });
    }
  };

  const showPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => {
        const previousIndex = prevIndex - 1;
        setVisitedQuestions((prevVisited) =>
          prevVisited.includes(previousIndex)
            ? prevVisited
            : [...prevVisited, previousIndex]
        );
        return previousIndex;
      });
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/result");
    }
  }, [isSubmitted]);
  const totalQuestions = questions.length;

  async function TestSubmit() {
    try {
      setLoading(true);

      // Fetch questions from the API
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const questionCounts = [0, 0, 0, 0];
      response.data.forEach((question) => {
        if (question.section === "verbal") {
          questionCounts[0]++;
        } else if (question.section === "quant") {
          questionCounts[1]++;
        } else if (question.section === "logical") {
          questionCounts[2]++;
        } else if (question.section === "programming") {
          questionCounts[3]++;
        }
      });
      const localStorageTestData = JSON.parse(localStorage.getItem("test"));
      const mergedData = {
        ...localStorageTestData,
        Question: questionCounts,
      };

      // Submit the test to the backend
      const submitResponse = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/quiz/submit-answers`,
        mergedData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
        console.log(mergedData, "Data is sending...")
      );

      if (submitResponse.status === 201) {
        if (companyPath === "practice-test") {
          navigate("/result", { state: { totalQuestions: totalQuestions } });
        } else {
          navigate("/companyresult", {
            state: { totalQuestions: totalQuestions, companyPath: companyPath },
          });
        }
        setLoading(false);
        setSubmitted(true);
        localStorage.removeItem("test");
      } else {
        console.error("Error submitting answers:", submitResponse.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      setLoading(false);
    }
  }

  const currentQuestion = questions[currentQuestionIndex];
  const generateQuestionButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalQuestions; i++) {
      buttons.push(
        <button
          key={i}
          className={`bg-${
            visitedQuestions.includes(i) ? "Primary" : "black"
          }  text-white p-2 rounded-lg mr-2 mb-2`}
          onClick={() => handleQuestionButtonClick(i)}
        >
          {i + 1}
        </button>
      );
    }
    setQuestionButtons(buttons);
  };

  useEffect(() => {
    generateQuestionButtons();
  }, [totalQuestions, visitedQuestions]);

  const handleQuestionButtonClick = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
    const currentQuestion = questions[questionIndex];

    setVisitedQuestions((prevVisited) =>
      prevVisited.includes(questionIndex)
        ? prevVisited
        : [...prevVisited, questionIndex]
    );

    const selectedOption = selectedOptions[currentQuestion._id];
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [currentQuestion._id]: selectedOption,
    }));
  };

  const handleTestSubmit = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsConfirmationModalOpen(false);
    TestSubmit();
  };

  const handleCloseModal = () => {
    setIsConfirmationModalOpen(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Code to lock console opening

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const isFullScreenEnabled = () => document.fullscreenElement;
    const handleFullScreenChange = () => {
      if (!isFullScreenEnabled()) {
        alert("You cannot exit full screen mode while taking the test.");
        // Re-enter fullscreen mode
        document.documentElement.requestFullscreen().catch((err) => {
          console.error("Error while re-entering fullscreen mode:", err);
        });
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error while entering fullscreen mode:", err);
    });
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  // Short cut for question Navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Move to the next question
        showNextQuestion();
      } else if (event.key === "ArrowLeft") {
        showPreviousQuestion();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNextQuestion, showPreviousQuestion]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleTestSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleTestSubmit]);

  //   // Shortcut for option choosing
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const optionKeys = ["1", "2", "3", "4", "5", "6"];
      if (optionKeys.includes(key)) {
        const optionIndex = parseInt(key) - 1;
        if (
          currentQuestion &&
          currentQuestion.options &&
          optionIndex < currentQuestion.options.length
        ) {
          const selectedOption = currentQuestion.options[optionIndex];
          handleOptionChange(
            currentQuestion._id,
            selectedOption,
            currentQuestion.section
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, handleOptionChange]);

  console.log(questions);

  return (
    <>
      <>
        {loading ? (
          <div className="h-screen flex items-center justify-center">
            <Loader />
          </div>
        ) : questions.length === 0 ? (
          <>
            <div className="h-screen flex items-center justify-center flex-col-reverse">
              <div>
                <h1 className="text-3xl font-Nunito">
                  We will add this test soon
                </h1>
              </div>
              <div>
                <img
                  className="max-w-xs"
                  src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1705598420/empty_u3jzi3.png"
                  alt="image"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="">
            <Wrapper>
              <div className="flex items-center flex-col justify-center">
                <div className="max-w-xs md:block hidden">
                  <img
                    src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1709751694/stairsArtboard_1_udhjjp.png"
                    alt="logo"
                    className="h-20 absolute left-4 -top-4 object-contain w-20"
                  />
                </div>
                <div className="max-w-xs md:hidden">
                  <img
                    src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1709751694/stairsArtboard_1_udhjjp.png"
                    alt="logo"
                    className="w-20 mt-1"
                  />
                </div>
                <div className="text-center ">
                  <h1 className="font-semibold mt-2 text-2xl capitalize font-poppins mb-2">
                    {companyPath} Test Series
                  </h1>
                </div>
              </div>
              <div className="flex justify-between   md:flex-row items-start  flex-col-reverse">
                <div className=" border sm:h-[80vh]  mb-10 sm:mb-0  h-full w-full  rounded-lg p-4 sm:w-10/12">
                  <form className=" ">
                    {currentQuestion && (
                      <div key={currentQuestion._id} className="">
                        <h3 className="mb-2 font-semibold mt-2">
                          <span className="font-semibold mt-2 mr-2 text-xl">
                            Question no {currentQuestion?.number}{" "}
                          </span>
                          <br />
                          {currentQuestion?.question
                            .split("\n")
                            .map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                <br className="my-2" />
                              </React.Fragment>
                            ))}

                          {/* {` ${
                    // currentQuestion?.question ||
                    currentQuestion?.mainParagraph ||
                    currentQuestion?.questionText ||
                    currentQuestion?.subQuestions?.question
                  }`} */}
                        </h3>
                        <div>
                          {currentQuestion?.options
                            ? currentQuestion?.options?.map(
                                (option, optionIndex) => (
                                  <label
                                    className="flex gap-x-4"
                                    key={optionIndex}
                                  >
                                    <input
                                      type="radio"
                                      name={currentQuestion._id}
                                      value={option}
                                      className="flex flex-col  "
                                      checked={
                                        selectedOptions[currentQuestion._id] ===
                                        option
                                      }
                                      onChange={() =>
                                        handleOptionChange(
                                          currentQuestion._id,
                                          option,
                                          currentQuestion.section
                                        )
                                      }
                                    />
                                    {option}
                                  </label>
                                )
                              )
                            : currentQuestion?.subQuestions?.map(
                                (subQuestion, subQuestionIndex) => (
                                  <div
                                    key={`${currentQuestion._id}-${subQuestionIndex}`}
                                    className="ml-4 mt-2 mb-2"
                                  >
                                    <h4 className="mb-2 font-semibold">{`${subQuestion.questionText}`}</h4>
                                    {subQuestion?.options?.map(
                                      (option, optionIndex) => (
                                        <label
                                          className="flex gap-x-4"
                                          key={optionIndex}
                                        >
                                          <input
                                            type="radio"
                                            name={`${currentQuestion._id} - ${subQuestionIndex}`}
                                            value={option}
                                            className="flex flex-col "
                                            checked={
                                              selectedOptions[
                                                `${currentQuestion._id}-${subQuestionIndex}`
                                              ] === option
                                            }
                                            onChange={() =>
                                              handleOptionChange(
                                                `${currentQuestion._id}-${subQuestionIndex}`,
                                                option
                                              )
                                            }
                                          />
                                          {option}
                                        </label>
                                      )
                                    )}
                                  </div>
                                )
                              )}
                        </div>
                        <br />

                        <div className="sm:absolute   bottom-4 gap-x-10 flex items-center">
                          {currentQuestionIndex > 0 && (
                            <button
                              type="button"
                              className="bg-black   text-white p-2  rounded-lg"
                              onClick={showPreviousQuestion}
                            >
                              <span className="hidden md:block px-2">
                                Previous
                              </span>
                              <GrFormPrevious className="text-2xl md:hidden" />
                            </button>
                          )}
                          {currentQuestionIndex < totalQuestions - 1 && (
                            <button
                              type="button"
                              className="bg-black   text-white p-2 rounded-lg "
                              onClick={showNextQuestion}
                            >
                              <span className="hidden md:block px-2">Next</span>
                              <MdOutlineNavigateNext className="text-2xl md:hidden" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="">
                      <button
                        type="button"
                        className="bg-black w-full sm:hidden bottom-4  right-10 px-4 py-2 mt-2 text-white rounded-lg"
                        onClick={handleTestSubmit}
                      >
                        Submit test
                      </button>
                    </div>
                  </form>
                </div>
                <div className="sm:flex flex-col sm:h-[80vh] sm:w-96 h-full w-full">
                  <div className="border rounded-lg mb-2 sm:ml-2 ml-0">
                    <div className="md:mb-0 p-4  ">
                      <p className=" font-semibold font-poppins">
                        Total Questions:{" "}
                        <span className="font-normal">{totalQuestions}</span>
                      </p>
                      <p className="font-semibold font-poppins">
                        Current User:
                        <span className="ml-2 font-normal">
                          {name.substring(0, 15) || email.substring(0, 15)}
                        </span>
                      </p>
                      <div className="  ">
                        <p className="font-semibold ">
                          Time Left: {Math.floor(timeLeft / 60)}:
                          {(timeLeft % 60).toString().padStart(2, "0")}
                        </p>
                      </div>
                      <Tooltip
                        likes={"Shortcuts"}
                        text={" 1,2,3,4,5 for option selection"}
                        texttwo={"Left -> Right <- for change question"}
                        textthree={"Press enter for submitting the test"}
                      />
                    </div>

                    <div className="mb-10 sm:hidden p-4 flex items-center justify-between">
                      <div className="flex flex-col justify-center items-center">
                        <div className="h-10 w-10 bg-Primary rounded-full">
                          {" "}
                        </div>
                        <h1 className="text-xs">
                          Marked:{" "}
                          {visitedQuestions.length > 0
                            ? markedQuestions.length + 1
                            : "NA"}
                        </h1>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="h-10 w-10 bg-red-500 rounded-full">
                          {" "}
                        </div>
                        <h1 className="text-xs">
                          Not Marked:{" "}
                          {visitedQuestions.length > 0
                            ? visitedQuestions.length - markedQuestions.length
                            : "NA"}
                        </h1>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="h-10 w-10 bg-black rounded-full"> </div>
                        <h1 className="text-xs">
                          Not Visited:{" "}
                          {questions.length - visitedQuestions.length}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:h-[80vh]  sm:w-96 w-full h-full ">
                    <div className="border sm:block hidden rounded-lg h-full ml-2 p-4 ">
                      <div className="mb-10 flex items-center justify-between">
                        <div className="flex flex-col justify-center items-center">
                          <div className="h-10 w-10 bg-Primary rounded-full">
                            {" "}
                          </div>
                          <h1 className="text-xs">
                            Marked:{" "}
                            {visitedQuestions.length > 0
                              ? markedQuestions.length + 1
                              : "NA"}
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="h-10 w-10 bg-red-500 rounded-full">
                            {" "}
                          </div>
                          <h1 className="text-xs">
                            Not Marked:{" "}
                            {visitedQuestions.length > 0
                              ? visitedQuestions.length - markedQuestions.length
                              : "NA"}
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="h-10 w-10 bg-black rounded-full">
                            {" "}
                          </div>
                          <h1 className="text-xs">
                            Not Visited:{" "}
                            {questions.length - visitedQuestions.length}
                          </h1>
                        </div>
                      </div>

                      <div className="flex  flex-wrap">
                        {questions.map((question, index) => (
                          <button
                            key={index}
                            className={`${
                              selectedOptions[question._id]
                                ? "bg-Primary"
                                : visitedQuestions.includes(index)
                                ? "bg-red-500"
                                : "bg-black"
                            } text-white h-10 w-10 rounded-full mr-2 mb-2`}
                            onClick={() => handleQuestionButtonClick(index)}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-2 flex   items-center justify-center">
                    <button
                      type="button"
                      className="bg-black sm:block hidden w-full bottom-10 right-28 px-4 py-2 mt-2 text-white rounded-lg"
                      onClick={handleTestSubmit}
                    >
                      Submit test
                    </button>
                  </div>
                </div>
                <ConfirmationModal
                  isOpen={isConfirmationModalOpen}
                  onClose={handleCloseModal}
                  onConfirm={handleConfirmSubmit}
                />
              </div>
            </Wrapper>
          </div>
        )}
      </>
    </>
  );
};
export default AllTestPage;
