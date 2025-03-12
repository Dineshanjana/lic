import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../Css/AuthModal.css";

export default function OtpVerificationForm({ email, onSuccess, onBack }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    if (value && /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        inputRefs[index + 1].current?.focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter the complete verification code");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("https://vishal-backend.vercel.app/api/auth/verify-otp", {
        email,
        otp: otpValue,
      });

      console.log("OTP verification successful:", response.data);
      setSuccess("Verification successful");
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      console.error("OTP verification error:", err);
      setError(err.response?.data?.message || "Invalid verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    setCanResend(false);
    setTimeLeft(60);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", { email });
      console.log("OTP resent successfully:", response.data);
    } catch (err) {
      console.error("Resend OTP error:", err);
      setError(err.response?.data?.message || "Failed to resend verification code");
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <div className="auth-form">
      <h2>Verify Your Email</h2>
      <p className="form-description">We've sent a verification code to {email || "your email"}</p>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="otp-input"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="timer-container">
          {canResend ? (
            <button type="button" className="resend-btn" onClick={handleResendOtp}>
              Resend code
            </button>
          ) : (
            <span>Resend code in {timeLeft} seconds</span>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading || otp.join("").length !== 6}>
          {isLoading ? "Verifying..." : "Verify"}
        </button>

        <button type="button" className="back-btn" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  );
}