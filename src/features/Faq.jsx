import React, { useState } from "react";
import "./FAQ.css"; // optional styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What Is a Luxury Hotel?",
      answer:
        "A luxury hotel offers top-class amenities, premium rooms, world-class dining, spa facilities, and exceptional customer service."
    },
    {
      question: "Are Luxury Hotels Worth the Cost?",
      answer:
        "Yes, they provide unmatched comfort, convenience, and exclusive experiences that justify the price for many travelers."
    },
    {
      question: "What Types of Rooms are Available?",
      answer:
        "Luxury hotels offer a wide range of rooms including deluxe rooms, executive suites, penthouses, and themed rooms."
    },
    {
      question: "Do You Offer Business Facilities?",
      answer:
        "Yes, most luxury hotels provide meeting rooms, business centers, high-speed WiFi, and conference facilities."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Have Any Question</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
