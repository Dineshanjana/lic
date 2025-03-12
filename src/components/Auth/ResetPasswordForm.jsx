import { useState } from "react"
import axios from "axios"
import "../../Css/AuthModal.css";

export default function ResetPasswordForm({ email, onSuccess, onBack }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    try {
      // Make API call to reset password endpoint
      // Note: In a real app, you'd typically need a reset token from the URL
      const response = await axios.post("/api/auth/reset-password", {
        email,
        password,
        // token: new URLSearchParams(window.location.search).get('token')
      })

      console.log("Password reset successful:", response.data)
      setSuccess("Password reset successful")

      // Wait a moment before proceeding to login
      setTimeout(() => {
        onSuccess()
      }, 1500)
    } catch (err) {
      console.error("Reset password error:", err)
      setError(err.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-form">
      <h2>Reset Password</h2>
      <p className="form-description">Create a new password for your account</p>

      {error && <div className="error-message">{error}</div>}

      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

        <button type="button" className="back-btn" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  )
}

