import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../components/Logo.jpg";

function Home() {
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    function handleLogin() {
        setShowLogin(true);
    }

    function handleBack() {
        setShowLogin(false); // Go back to the home page
    }

    return (
        <>
            {/* ✅ Show Login Page Full-Screen When Clicked */}
            {showLogin ? (
                <div className="login-container">
                    <section className="login-section">
                        <h2>Login</h2>
                        <form>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />

                            <label>Email:</label>
                            <input
                                type="email"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                placeholder="Enter your email"
                            />

                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={handleBack} className="back-button">
                            Back to Home
                        </button>
                    </section>
                </div>
            ) : (
                <>
                    <header className="navbar">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/doctor">Doctor</Link></li>
                                <li><Link to="/patient">Patient</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </header>

                    <section className="hero">
                        <div className="hero-content">
                            <h1>GeT ThE BeSt SeRvIcEs</h1>
                            <button onClick={handleLogin} className="cta-button">
                                Get Started
                            </button>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Home;
