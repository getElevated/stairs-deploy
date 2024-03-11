import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import Wrapper from "../Wrapper";


const TestPage = () => {
  const {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const apiUrl = "http://localhost:3001/api/quiz/questions/HCL";
  const getVerbal = async () => {
    if (access_token) {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        const initialSelectedOptions = {};
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
      }
    } else {
      console.error("No access token available");
    }
  };
  console.log(questions);
  useEffect(() => {
    getVerbal();
  }, [access_token]);
  const handleOptionChange = (questionId, selectedOption, section) => {
    console.log(questionId, selectedOption);
    if (questions.some((q) => q._id === questionId && q.subQuestions)) {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [questionId]: selectedOption,
      }));
    } else {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [questionId]: selectedOption,
      }));
    }
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
      answers: QuestionSection,
    };
    localStorage.removeItem("test");
    localStorage.setItem("test", JSON.stringify(finalLocalStorageData));
  };

  async function TestSubmit() {
   
    try {
      const response = await axios.put(
        "http://localhost:3001/api/quiz/submit-answers",
        JSON.parse(localStorage.getItem("test")),
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const data = response.json();
      console.log("data", data);
      localStorage.removeItem("test");
    } catch (error) {
      console.error("Error fetching verbal data:", error);
    }
  }

  return (
    <>
      <Wrapper>
        <h1 className="font-semibold mt-20 text-2xl font-poppins mb-4">
          HCL Tech Series
        </h1>
        <div className="mb-8">
          <form className=" ">
            {questions?.map((question) => (
              <div
                key={question._id}
                className=""
              >
                <h3 className="mb-2 font-semibold">{`${question?.number}.  ${
                  question?.question ||
                  question?.mainParagraph ||
                  question?.questionText ||
                  question?.subQuestions?.question
                }`}</h3>
                <div>
                  {question.options
                    ? question?.options?.map((option, optionIndex) => (
                        <label
                          className="flex gap-x-4"
                          key={optionIndex}
                        >
                          <input
                            type="radio"
                            name={question._id}
                            value={option}
                            className="flex flex-col "
                            checked={selectedOptions[question._id] === option}
                            onChange={() =>
                              handleOptionChange(
                                question._id,
                                option,
                                question.section
                              )
                            }
                          />
                          {option}
                        </label>
                      ))
                    : question?.subQuestions?.map(
                        (subQuestion, subQuestionIndex) => (
                          <div
                            key={`${question._id}-${subQuestionIndex}`}
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
                                    name={`${question._id}-${subQuestionIndex}`}
                                    value={option}
                                    className="flex flex-col "
                                    checked={
                                      selectedOptions[
                                        `${question._id}-${subQuestionIndex}`
                                      ] === option
                                    }
                                    onChange={() =>
                                      handleOptionChange(
                                        `${question._id}-${subQuestionIndex}`,
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
              </div>
            ))}
            <button
              type="submit"
              className="bg-black px-4 py-2 mt-2 text-white rounded-sm "
              onClick={() => {
                TestSubmit();
              }}
            >
              Save and Submit
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default TestPage;
