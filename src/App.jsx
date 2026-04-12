import React from "react";

// Use GitHub avatar to avoid build issues if local image is missing
const profileImage = "https://avatars.githubusercontent.com/u/275459047?v=4";

const Container = ({ children }) => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>{children}</div>
);

const Section = ({ children, id }) => (
  <section id={id} style={{ padding: "60px 0", borderBottom: "1px solid #eee" }}>{children}</section>
);

const Card = ({ children }) => (
  <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 24, background: "#fff", boxShadow: "0 10px 20px rgba(0,0,0,0.04)" }}>{children}</div>
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: "12px 18px",
      borderRadius: 12,
      border: "none",
      background: "#111",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span
    style={{
      border: "1px solid #ddd",
      padding: "6px 12px",
      borderRadius: 20,
      marginRight: 8,
      marginBottom: 8,
      display: "inline-block",
      background: "#fafafa",
    }}
  >
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
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111", lineHeight: 1.6, background: "#fafafa" }}>
      {/* HEADER */}
      <header style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #eee", zIndex: 10 }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
            <div>
              <strong>Marcos Portella</strong>
            </div>
            <div>
              <a href="#about" style={{ marginRight: 20 }}>About</a>
              <a href="#expertise" style={{ marginRight: 20 }}>Expertise</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <Section>
        <Container>
          <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <h1 style={{ fontSize: 40, marginBottom: 12 }}>
                Principal Product Leader in Fraud & Payments
              </h1>
              <p style={{ fontSize: 18, color: "#444", maxWidth: 500 }}>
                Driving multi-million revenue protection and conversion growth through AI-driven fraud and risk platforms.
              </p>

              <div style={{ marginTop: 24 }}>
                <Button onClick={() => window.location.href = "mailto:marcos.portella@gmail.com"}>
                  Contact Me
                </Button>
              </div>
            </div>

            <img
              src={profileImage}
              alt="Marcos"
              style={{ width: 260, borderRadius: 20, objectFit: "cover" }}
            />
          </div>
        </Container>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section>
        <Container>
          <h2 style={{ marginBottom: 20 }}>Key Achievements</h2>
          <Card>
            <ul>
              {achievements.map((a) => (
                <li key={a} style={{ marginBottom: 12 }}>{a}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      {/* EXPERTISE */}
      <Section id="expertise">
        <Container>
          <h2 style={{ marginBottom: 20 }}>Core Expertise</h2>
          <Card>
            {expertise.map((e) => (
              <Badge key={e}>{e}</Badge>
            ))}
          </Card>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <Container>
          <h2 style={{ marginBottom: 20 }}>Contact</h2>
          <Card>
            <p>Email: marcos.portella@gmail.com</p>
            <p>Location: Haarlem, Netherlands</p>
            <p>
              LinkedIn: 
              <a href="https://www.linkedin.com/in/marcos-portella-8b610b46/" target="_blank" rel="noreferrer">
                Profile
              </a>
            </p>
          </Card>
        </Container>
      </Section>
    </div>
  );
}