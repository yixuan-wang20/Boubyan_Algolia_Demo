import React from "react";
import config from "../config";
import ask from "../img/ask.svg";

function QuestionSuggestionList(props) {
  if (!props.shouldDisplay) {
    return null;
  }
  const texts = props.texts;
  const listItems = texts.map(text => (
    <li
      key={text}
      onClick={() => {
        props.updateAppQuery(text);
      }}
    >
      <button className="ask-this-question">
        {`“${text}”`}
        <img src={ask} alt="Ask this question" />
      </button>
    </li>
  ));

  return (
    <div className="question-suggestion-container">
      <span>
        <h2>Start a conversation with Msa3ed</h2>
        Msa3ed can search through {config.company}'s entire catalogue of services, in both Arabic and English. You could ask something like:
      </span>
      <ul>{listItems}</ul>
    </div>
  );
}

export default QuestionSuggestionList;
