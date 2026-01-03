import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/auth.css";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRole, setLoginRole] = useState("");

  // Signup state
  const [empId, setEmpId] = useState("");
  const [signupRole, setSignupRole] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!loginEmail || !loginPassword || !loginRole) {
      setMessage("Please fill all login fields");
      return;
    }

    const role = loginRole === "HR" ? "admin" : "employee";

    login({ email: loginEmail, role });

    navigate(role === "admin" ? "/admin" : "/employee");
  };

  const handleSignup = () => {
    if (!empId || !signupRole || !signupEmail || !signupPassword) {
      setMessage("All signup fields are required");
      return;
    }

    setMessage("Account created successfully (mock)");
    setActiveTab("login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h1>
          Odoo <span>X</span> GCET
        </h1>
        <p className="subtitle">Create your GCET account</p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => {
              setActiveTab("login");
              setMessage("");
            }}
          >
            Login
          </button>
          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => {
              setActiveTab("signup");
              setMessage("");
            }}
          >
            Sign Up
          </button>
        </div>

        {/* SIGN UP */}
        {activeTab === "signup" && (
          <div className="form">
            <input
              type="text"
              placeholder="Employee ID"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />

            <select
              value={signupRole}
              onChange={(e) => setSignupRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Employee">Employee</option>
              <option value="HR">HR</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />

            <small>Password: Min 8 chars, 1 Uppercase, 1 Number</small>

            <button onClick={handleSignup}>Create Account</button>
          </div>
        )}

        {/* LOGIN */}
        {/* LOGIN */}
{activeTab === "login" && (
  <div className="form">
    {/* ROLE AT TOP */}
    <select
      value={loginRole}
      onChange={(e) => setLoginRole(e.target.value)}
    >
      <option value="">Select Role</option>
      <option value="Employee">Employee</option>
      <option value="HR">HR / Admin</option>
    </select>

    <input
      type="email"
      placeholder="Email"
      value={loginEmail}
      onChange={(e) => setLoginEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      value={loginPassword}
      onChange={(e) => setLoginPassword(e.target.value)}
    />

    <button onClick={handleLogin}>Login</button>
  </div>
)}


        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
