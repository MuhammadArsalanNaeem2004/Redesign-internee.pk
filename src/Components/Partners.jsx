import React from "react";
import { CiCloud } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { LuHandshake, LuBuilding2, LuLandmark } from "react-icons/lu";
import { BsCpu } from "react-icons/bs";

function Partners() {
  const partners = [
    { name: "Google Cloud", logo: <CiCloud /> },
    { name: "SECP", logo: <GoShieldCheck /> },
    { name: "Collaboration Partner", logo: <LuHandshake /> },
    { name: "Tech Partner", logo: <BsCpu /> },
    { name: "NICS", logo: <LuBuilding2 /> },
    { name: "PITB", logo: <LuLandmark /> },
  ];

  return (
    <section
      className="py-16 bg-white"
      data-name="partners"
      data-file="Components/Partners.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#212a38]">
          Collaborated with Trusted Worldwide Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 cursor-pointer bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              title={partner.name}
            >
              <div className="text-3xl text-[#6b7280]">{partner.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
