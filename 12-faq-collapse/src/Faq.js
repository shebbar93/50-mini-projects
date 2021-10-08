import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [one, SetOne] = useState(false);
  const [two, SetTwo] = useState(false);
  const [three, SetThree] = useState(false);
  const [four, SetFour] = useState(false);
  const [five, SetFive] = useState(false);
  return (
    <div>
      <h1>Frequently asked questions</h1>
      <div className="faq-container">
        <div className={`faq ${one ? "active" : ""}`}>
          <h3 className="faq-title">Why shouldn't we trust atoms.?</h3>
          <div className="faq-text">They make up everything</div>
          <button className="faq-toggle">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="faDown"
              onClick={() => SetOne(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="faTimes"
              onClick={() => SetOne(false)}
            />
          </button>
        </div>
        <div className={`faq ${two ? "active" : ""}`}>
          <h3 className="faq-title">
            What do you call someone with no body and no nose?
          </h3>
          <div className="faq-text">Nobody knows.</div>
          <button className="faq-toggle">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="faDown"
              onClick={() => SetTwo(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="faTimes"
              onClick={() => SetTwo(false)}
            />
          </button>
        </div>
        <div className={`faq ${three ? "active" : ""}`}>
          <h3 className="faq-title">
            What's the object-oriented way to become wealthy?
          </h3>
          <div className="faq-text">Inheritance.</div>
          <button className="faq-toggle">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="faDown"
              onClick={() => SetThree(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="faTimes"
              onClick={() => SetThree(false)}
            />
          </button>
        </div>
        <div className={`faq ${four ? "active" : ""}`}>
          <h3 className="faq-title">
            How many tickles does it take to tickle an octopus?
          </h3>
          <div className="faq-text">Ten-tickles!</div>
          <button className="faq-toggle">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="faDown"
              onClick={() => SetFour(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="faTimes"
              onClick={() => SetFour(false)}
            />
          </button>
        </div>
        <div className={`faq ${five ? "active" : ""}`}>
          <h3 className="faq-title"> What is: 1 + 1?</h3>
          <div className="faq-text">Depends on who are you asking.</div>
          <button className="faq-toggle">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="faDown"
              onClick={() => SetFive(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="faTimes"
              onClick={() => SetFive(false)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
