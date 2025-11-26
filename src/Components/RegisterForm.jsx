import React from "react";
import Btn from "./Btn";

export default function RegisterForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
  });

  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      interest: "",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Success Message */}
        {showSuccess && (
          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mb-6 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Thank you for registering!
            </h2>
            <p className="text-green-700">We will contact you soon.</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Start Your Journey</h1>
            <p className="text-xl text-[#6366f1]">
              Fill in your details to begin your internship experience
            </p>
          </div>

          {/* ✅ Form hide after successful submit */}
          {!showSuccess && (
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
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Education Level
                </label>
                <select
                  required
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Area of Interest
                </label>
                <select
                  required
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366f1] focus:outline-none"
                >
                  <option value="">Select your area of interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Btn type="submit" className="btn-primary w-full">
                Submit Registration
              </Btn>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
