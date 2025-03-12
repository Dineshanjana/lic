import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import "../../Css/AuthModal.css";

export default function LoginForm({ onSwitchMode, onForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Make API call to login endpoint
      const response = await axios.post("https://vishal-backend.vercel.app/api/auth/login", {
        value: email,
        password,
      });

      console.log("Login successful:", response.data);

      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Show success message
      message.success("Login successful!");

      // Redirect or set auth state
      window.location.href = '/';
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid email or password. Please try again.");
      message.error(err.response?.data?.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Log In</h2>
      <p className="form-description">Welcome back! Please enter your details.</p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="forgot-password-btn" onClick={onForgotPassword}>
            Forgot password?
          </button>
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <div className="form-footer">
        Don't have an account?{" "}
        <button type="button" className="link-btn" onClick={onSwitchMode}>
          Sign up
        </button>
      </div>
    </div>
  );
}