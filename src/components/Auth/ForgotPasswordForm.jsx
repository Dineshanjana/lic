import { useState } from "react"
import axios from "axios"
import "../../Css/AuthModal.css";

export default function ForgotPasswordForm({ onSuccess, onBack }) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsLoading(true)

    try {
      // Make API call to forgot password endpoint
      const response = await axios.post("https://vishal-backend.vercel.app/api/auth/forgot-password", {
        email,
      })

      console.log("Password reset requested:", response.data)
      setSuccess("Reset instructions sent to your email")

      // Wait a moment before proceeding to the next step
      setTimeout(() => {
        onSuccess(email)
      }, 1500)
    } catch (err) {
      console.error("Forgot password error:", err)
      setError(err.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      <p className="form-description">Enter your email and we'll send you instructions to reset your password</p>

      {error && <div className="error-message">{error}</div>}

      {success && <div className="success-message">{success}</div>}

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

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Reset Instructions"}
        </button>

        <button type="button" className="back-btn" onClick={onBack}>
          Back to Login
        </button>
      </form>
    </div>
  )
}

