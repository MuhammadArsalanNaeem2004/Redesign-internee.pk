import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiMessageCircle, FiPhone } from "react-icons/fi";

function ContactSupp() {
  const supportOptions = [
    {
      icon: <IoMailOutline />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "support@internee.pk",
      link: "mailto:support@internee.pk",
    },
    {
      icon: <FiMessageCircle />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      link: "#",
    },
    {
      icon: <FiPhone />,
      title: "Phone Support",
      description: "Call us during business hours (9 AM - 6 PM)",
      action: "+92-XXX-XXXXXXX",
      link: "tel:+92XXXXXXXXXX",
    },
  ];

  return (
    <section
      className="py-16 bg-gray-50"
      data-name="contact-support"
      data-file="Components/ContactSupp.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-[#6b7280]">
            Our support team is here to assist you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="card text-center bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-green-100 mx-auto">
                <div className=" text-2xl text-green-600">{option.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-2">{option.title}</h3>

              <p className="text-[#6b7280] mb-4">{option.description}</p>

              <a
                href={option.link}
                className="text-[#6366f1] font-semibold hover:underline"
              >
                {option.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSupp;
