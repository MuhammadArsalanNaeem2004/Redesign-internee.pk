import React from "react";

function InstructorForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    description: "",
  });

  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowSuccess(true);

    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      expertise: "",
      experience: "",
      description: "",
    });

    // Auto hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="apply"
      className="py-20 bg-white"
      data-name="instructor-form"
      data-file="Components/InstructorForm.jsx"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSuccess && (
          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mb-6 text-center animate-pulse">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              ✅ Application Submitted!
            </h2>
            <p className="text-green-700">
              We will review your application and contact you soon.
            </p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Apply to Become an Instructor
            </h2>
            <p className="text-xl text-[#6b7280]">
              Tell us about yourself and your teaching interests
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Area of Expertise
              </label>
              <select
                required
                value={formData.expertise}
                onChange={(e) =>
                  setFormData({ ...formData, expertise: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
              >
                <option value="">Select your area of expertise</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="data-science">Data Science</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Years of Experience
              </label>
              <select
                required
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
              >
                <option value="">Select your experience level</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Tell Us About Yourself
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition  w-full"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InstructorForm;
