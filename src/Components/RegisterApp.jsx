import React from "react";
// import Header from "./Header";
import RegisterForm from "./RegisterForm";
// import Footer from "./Footer";

function RegisterApp() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      id="#register"
      className="min-h-screen bg-gray-50"
      data-name="register-app"
      data-file="RegisterApp.jsx"
    >
      {/* <Header /> */}
      <RegisterForm />
      {/* <Footer /> */}
    </div>
  );
}

export default RegisterApp;
