import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for an internship?",
      answer:
        "Browse our internship listings, select one that matches your interests, and click Apply. Fill out the application form with your details and submit it.",
    },
    {
      question: "Are the internships paid or unpaid?",
      answer:
        "We offer both paid and unpaid internships. Each listing clearly indicates the compensation type. Paid internships typically offer stipends or performance-based rewards.",
    },
    {
      question: "How long do internships typically last?",
      answer:
        "Most internships on our platform range from 4 to 12 weeks. The exact duration is specified in each internship listing and can vary based on the company and role.",
    },
    {
      question: "Can I do multiple internships at once?",
      answer:
        "Yes, you can participate in multiple internships simultaneously if you can manage the workload. However, we recommend focusing on one to ensure quality work.",
    },
    {
      question: "What happens after I complete an internship?",
      answer:
        "Upon completion, you receive a certificate, performance review, and the work becomes part of your portfolio. Top performers may receive job offers from partner companies.",
    },
  ];

  return (
    <section
      className="py-16 bg-white"
      data-name="faq"
      data-file="Components/FAQ.jsx"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <div className="text-xl text-[#6366f1]">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-[#6b7280]">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
