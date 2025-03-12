import { useState } from "react";
import "../Css/AuthModal.css";
import SignupForm from "./Auth/Signup";
import LoginForm from "./Auth/Login";
import ForgotPasswordForm from "./Auth/ForgotPasswordForm";
import ResetPasswordForm from "./Auth/ResetPasswordForm";
import OtpVerificationForm from "./Auth/OtpVerificationForm";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [otpData, setOtpData] = useState(null);

  if (!isOpen) return null;

  const renderForm = () => {
    switch (mode) {
      case "signup":
        return ( 
          <SignupForm
            onSuccess={(data) => {
              setOtpData(data);
              setMode("verify-otp");
            }}
            onSwitchMode={() => setMode("login")}
          />
        );
      case "verify-otp":
        return (
          <OtpVerificationForm
            email={otpData?.email}
            onSuccess={() => window.location.reload()}
            onBack={() => setMode("signup")}
          />
        );
      case "login":
        return <LoginForm onSwitchMode={() => setMode("signup")} onForgotPassword={() => setMode("forgot-password")} />;
      case "forgot-password":
        return (
          <ForgotPasswordForm
            onSuccess={(emailUsed) => {
              setEmail(emailUsed);
              setMode("reset-password");
            }}
            onBack={() => setMode("login")}
          />
        );
      case "reset-password":
        return (
          <ResetPasswordForm
            email={email}
            onSuccess={() => setMode("login")}
            onBack={() => setMode("forgot-password")}
          />
        );
      default:
        return <LoginForm onSwitchMode={() => setMode("signup")} />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {renderForm()}
      </div>
    </div>
  );
}