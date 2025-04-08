import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I access the Guide and Map?",
    answer:
      "You can sign in using your email address, Facebook, or Google account. The guide page, including the map, is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!",
  },
  {
    question: "Do I need internet connection?",
    answer:
      "When you download the Rexby app and purchase my guide, you can access it offline. If you’re using a web browser, an internet connection is required.",
  },
  {
    question: "How long will I have access?",
    answer: "Once you buy access, it is forever.",
  },
  {
    question: "Can I share it with my travel buddy?",
    answer: "Yes, you can invite one travel buddy.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#f9f9f9] md:flex-row w-full px-6 md:px-16 py-10 gap-6">
      {/* Left Title */}
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl md:text-3xl font-semibold">Your questions, <br />answered</h2>
      </div>

      {/* Right FAQs */}
      <div className="w-full md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
