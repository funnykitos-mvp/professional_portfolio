import React from "react";
import profileImage from "./assets/profile.jpg";

// ✅ Simple components (no external UI libraries needed)
const Card = ({ children }) => (
  <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 20, marginBottom: 20 }}>{children}</div>
);

const Button = ({ children, ...props }) => (
  <button {...props} style={{ padding: "10px 16px", borderRadius: 12, border: "1px solid #111", cursor: "pointer" }}>
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span style={{ border: "1px solid #ddd", padding: "6px 10px", borderRadius: 20, marginRight: 8, display: "inline-block", marginBottom: 8 }}>
    {children}
  </span>
);

const expertise = [
  "Fraud & Risk Product Strategy",
  "ML-Driven Fraud & Authorization Systems",
  "Platform Product Management",
  "Payments Optimization",
  "Experimentation & Decision Science",
  "Cross-functional Leadership",
  "Executive Stakeholder Management",
];

const achievements = [
  "Reduced fraud losses by double-digit percentages across global markets by building an internal ML-driven risk engine.",
  "Improved authorization and conversion rates through adaptive, risk-based decisioning and ML-driven authorization controls.",
  "Delivered multi-million euro annual revenue protection across the global payments ecosystem.",
  "Built and scaled fraud detection platforms supporting high-volume, real-time transaction systems.",
  "Established KPI frameworks used at leadership level to drive product and risk strategy decisions.",
];

export default function MarcosPortfolio() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111", lineHeight: 1.5 }}>
      {/* HEADER */}
      <header style={{ borderBottom: "1px solid #eee", padding: 20, display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>Marcos Vinicius Portella</strong><br />
          <span style={{ color: "#555" }}>Principal / Group PM • Fraud • Payments • Risk</span>
        </div>
        <div>
          <a href="#about" style={{ marginRight: 15 }}>About</a>
          <a href="#expertise" style={{ marginRight: 15 }}>Expertise</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section id="about" style={{ padding: 40, display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ maxWidth: 600 }}>
          <h1 style={{ fontSize: 32, marginBottom: 10 }}>
            Principal Product Leader in Fraud Prevention
          </h1>
          <p style={{ fontSize: 18, color: "#444" }}>
            Building fraud, risk, and authorization products that protect revenue and improve customer conversion.
          </p>

          <div style={{ marginTop: 20 }}>
            <Button onClick={() => window.location.href = "mailto:marcos.portella@gmail.com"}>
              Contact Me
            </Button>
          </div>
        </div>

        <img
          src={profileImage}
          alt="Marcos"
          style={{ width: 260, borderRadius: 20 }}
        />
      </section>

      {/* ACHIEVEMENTS */}
      <section style={{ padding: 40 }}>
        <h2>Key Achievements</h2>
        <Card>
          <ul>
            {achievements.map((a) => (
              <li key={a} style={{ marginBottom: 10 }}>{a}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" style={{ padding: 40 }}>
        <h2>Expertise</h2>
        <Card>
          {expertise.map((e) => (
            <Badge key={e}>{e}</Badge>
          ))}
        </Card>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 40 }}>
        <h2>Contact</h2>
        <Card>
          <p>Email: marcos.portella@gmail.com</p>
          <p>Location: Haarlem, Netherlands</p>
          <p>
            LinkedIn: 
            <a href="https://www.linkedin.com/in/marcos-portella-8b610b46/" target="_blank">
              Profile
            </a>
          </p>
        </Card>
      </section>
    </div>
  );
}