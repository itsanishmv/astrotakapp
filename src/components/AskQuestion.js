import React, { useContext, useEffect, useState } from "react";
import { dataSharingPoint } from "./store";

function AskQuestion() {
  const [charCount, setCharCount] = useState();
  const [Questions, setQuestions] = useState([]);
  const [SelectedQuestion, setSelectedQuestion] = useState("");
  const [Textvalue, setTextValue] = useState(false);

  const { Selectedcategory, setSelectedCategory } =
    useContext(dataSharingPoint);

  useEffect(() => {
    fetch("https://staging-api.astrotak.com/api/question/category/all")
      .then((res) => res.json())
      .then((data) => setQuestions(data.data));
  }, []);

  function handleTextArea(e) {
    setCharCount(e.target.value.length);
    setTextValue(e.target.value);
  }
  function handleBackSpace(e) {
    setSelectedQuestion(SelectedQuestion.slice(0, -1));
  }
  return (
    <div className="flex mt-24 h-screen p-4  flex-col">
      <div>
        <h1 className="font-bold ">AskQuestion</h1>
        <p className="leading-5 font-light mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          quo maxime fugiat est facilis voluptates, deleniti similique quidem,
          dolor esse eius, modi molestias consequatur fugit eos ratione
          molestiae! Ea, modi.
        </p>
      </div>
      <div>
        <h1 className="font-bold mt-2 ">Choose category</h1>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-[100%] bg-white p-2 border-b-2 outline-none mt-2"
        >
          {Questions.map((question) => (
            <option key={question.id} value={question.name}>
              {question.name}
            </option>
          ))}
        </select>
        <div className="sticky top-[100px] bg-white z-30 ">
          <textarea
            onChange={(e) => handleTextArea(e)}
            type="text"
            required
            maxlength="150"
            minlength="20"
            className="  border-2 border-slate-400 w-[100%] mt-5 h-24 p-2 focus:border-[#2098F3] rounded-lg outline-none"
            placeholder="Type a question"
            value={SelectedQuestion || Textvalue}
            onKeyDown={() => handleBackSpace()}
          />
          <p className="flex justify-end text-sm font-semibold text-[#D4D4D4]">
            {charCount}/150
          </p>
        </div>
        <h1 className="font-bold ">Ideas what to Ask (Select Any)</h1>
        <ul className="py-2">
          {Questions.filter(
            (question) => question.name === Selectedcategory
          ).map((item) =>
            item.suggestions.map((suggestion) => (
              <div className="border-b-2 w-[100%] flex p-2 items-center">
                <img
                  className="h-5 "
                  style={{
                    filter:
                      "invert(50%) sepia(62%) saturate(1851%) hue-rotate(2deg) brightness(106%) contrast(104%)",
                  }}
                  src="ask.png"
                  alt=""
                />
                <li
                  onClick={() => setSelectedQuestion(suggestion)}
                  className="ml-2"
                  value={suggestion}
                >
                  {suggestion}
                </li>
              </div>
            ))
          )}
        </ul>
        <p className="leading-4 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          aliquam, vitae incidunt unde error nobis numquam culpa assumenda
          blanditiis molestiae rem temporibus recusandae libero praesentium
          rerum fugit eius, natus maxime.
        </p>

        <li className="bg-[#FFF1E8] p-2 text-[#FFA664] leading-4 flex flex-col items-center mb-48">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            off
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            off
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            off
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            off
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            off
          </li>
        </li>
      </div>
    </div>
  );
}

export default AskQuestion;
