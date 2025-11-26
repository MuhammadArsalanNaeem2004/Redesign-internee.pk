import React from "react";

function InstructorProcess() {
  const steps = [
    {
      number: "1",
      title: "Apply to Teach",
      description:
        "Fill out the instructor application form with your details and expertise",
    },
    {
      number: "2",
      title: "Get Approved",
      description:
        "Our team reviews your application and approves qualified instructors",
    },
    {
      number: "3",
      title: "Create Content",
      description:
        "Start creating tutorials, courses, and projects for students",
    },
    {
      number: "4",
      title: "Earn Revenue",
      description: "Get paid based on student enrollments and engagement",
    },
  ];

  return (
    <section
      className="py-20 bg-linear-to-br from-indigo-50 to-purple-50"
      data-name="instructor-process"
      data-file="Components/InstructorProcess.jsx"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-[#6b7280]">
            Four simple steps to start your teaching journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#6366f1] mx-auto">
                <span className="text-3xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#6b7280]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstructorProcess;
