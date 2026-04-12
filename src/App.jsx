import React from "react";

const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

const Container = ({ children }) => (
  <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>{children}</div>
);

const Section = ({ children, id, noBorder = false }) => (
  <section
    id={id}
    style={{
      padding: "64px 0",
      borderBottom: noBorder ? "none" : "1px solid #e5e7eb",
    }}
  >
    {children}
  </section>
);

const Card = ({ children, style = {} }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 18,
      padding: 24,
      background: "#fff",
      boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
      ...style,
    }}
  >
    {children}
  </div>
);

const Button = ({ children, secondary = false, ...props }) => (
  <button
    {...props}
    style={{
      padding: "12px 18px",
      borderRadius: 12,
      border: secondary ? "1px solid #d1d5db" : "none",
      background: secondary ? "#fff" : "#111",
      color: secondary ? "#111" : "#fff",
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
      border: "1px solid #d1d5db",
      padding: "7px 12px",
      borderRadius: 999,
      marginRight: 8,
      marginBottom: 10,
      display: "inline-block",
      background: "#fafafa",
      color: "#222",
      fontSize: 14,
    }}
  >
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div style={{ marginBottom: 28 }}>
    {eyebrow ? (
      <p
        style={{
          margin: 0,
          color: "#6b7280",
          fontSize: 12,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </p>
    ) : null}
    <h2 style={{ margin: "8px 0 10px", color: "#111", fontSize: 30 }}>{title}</h2>
    {subtitle ? (
      <p style={{ margin: 0, color: "#4b5563", maxWidth: 760 }}>{subtitle}</p>
    ) : null}
  </div>
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

const experience = [
  {
    company: "Booking.com",
    location: "Amsterdam, Netherlands",
    roles: [
      {
        title: "Senior Product Manager (Principal Scope)",
        period: "2021 – Present",
        scope:
          "Fraud & Risk across the global payments ecosystem, covering detection, prevention, and recovery systems across multiple markets.",
        bullets: [
          "Led development of an in-house ML-driven adaptive authorization model, optimizing customer conversion while reducing fraud exposure.",
          "Owned product strategy and long-term vision for fraud detection, prevention, and recovery across the global payments ecosystem.",
          "Led development of a scalable risk platform integrating ML models and real-time decisioning, improving fraud detection accuracy while maintaining customer experience.",
          "Defined product direction for ML-driven fraud systems, including Transformer-based models, balancing precision, recall, and business trade-offs.",
          "Influenced senior stakeholders across engineering, finance, and compliance to align on risk appetite and investment priorities.",
          "Established product and business KPIs adopted at leadership level to measure fraud performance and revenue protection.",
          "Drove experimentation strategy across multiple teams, accelerating decision-making and unlocking incremental revenue.",
          "Led vendor strategy and partnerships, optimizing build-versus-buy decisions at platform level.",
        ],
      },
      {
        title: "Product Manager",
        period: "2018 – 2021",
        bullets: [
          "Owned roadmap for fraud tooling, chargeback automation, and detection workflows across multiple markets.",
          "Delivered operational efficiency improvements through automation and enhanced data integration.",
          "Partnered with data science to identify emerging fraud patterns and improve detection models.",
          "Built monitoring systems and dashboards to evaluate model performance and rule effectiveness.",
        ],
      },
      {
        title: "Fraud Analyst",
        period: "2017 – 2018",
        bullets: [
          "Developed fraud detection systems using Python, SQL, and PySpark.",
          "Conducted deep-dive analyses into fraud patterns to improve rule logic and model inputs.",
          "Built dashboards supporting real-time fraud monitoring and operational decision-making.",
        ],
      },
      {
        title: "Chargeback Specialist",
        period: "2017",
        bullets: [
          "Improved recovery processes and collaborated with payment providers and card schemes.",
          "Identified dispute trends and root causes to inform fraud prevention strategies.",
        ],
      },
    ],
  },
  {
    company: "PayPal",
    location: "Dundalk, Ireland",
    roles: [
      {
        title: "Payment Specialist",
        period: "2016 – 2017",
        bullets: [
          "Managed fraud checks, KYC/KYB processes, and account risk decisions aligned with company risk appetite.",
          "Reviewed disputes and chargebacks in compliance with global card scheme regulations.",
          "Led internal training and knowledge-sharing initiatives across teams.",
        ],
      },
    ],
  },
  {
    company: "Itaú Bank",
    location: "São Paulo, Brazil",
    roles: [
      {
        title: "Finance Specialist",
        period: "2008 – 2012",
        bullets: ["Built financial models and conducted analysis to support strategic decision-making."],
      },
    ],
  },
  {
    company: "Liberty Insurance",
    location: "São Paulo, Brazil",
    roles: [
      {
        title: "Claims Specialist",
        period: "2004 – 2008",
        bullets: ["Managed claims lifecycle and conducted fraud investigations to support risk mitigation."],
      },
    ],
  },
];

const industry = [
  "Speaker at Merchant Risk Council (MRC) conferences from 2021 to 2023, presenting on AI-driven fraud detection and recovery strategies.",
  "Contributor to Booking Holdings internal innovation forums, presenting on AI, payments, and fraud strategy.",
];

const education = [
  "Product Management (Strategy & Roadmapping)",
  "Scrum & Agile Certifications",
  "Mastercard Academy — Dispute Resolution",
  "Bachelor’s Degrees in History & Education — Catholic University of São Paulo",
  "KYC & KYB Certification",
  "Technical Diploma in General Insurance",
];

export default function MarcosPortfolio() {
  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#111",
        lineHeight: 1.6,
        background: "#fafafa",
        textAlign: "left",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 10,
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>Marcos Portella</strong>
              <div style={{ color: "#6b7280", fontSize: 14 }}>
                Principal / Group PM • Fraud • Payments • Risk
              </div>
            </div>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              <a href="#about">About</a>
              <a href="#achievements">Achievements</a>
              <a href="#expertise">Expertise</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </Container>
      </header>

      <Section id="about">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(300px, 1.2fr) minmax(240px, 360px)",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: 1.4,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                Principal-level Product Leader
              </p>
              <h1 style={{ fontSize: 42, margin: "10px 0 14px", color: "#111", lineHeight: 1.15 }}>
                Building fraud, risk, and authorization products that protect revenue and improve customer conversion.
              </h1>
              <p style={{ fontSize: 18, color: "#374151", maxWidth: 720, margin: 0 }}>
                Principal-level Product Leader in Fraud Prevention with 11+ years of experience owning global risk and payments strategy at scale. Proven track record building AI-driven fraud and authorization platforms, leveraging machine learning, including Transformer-based models, to reduce fraud losses, improve authorization rates, and protect revenue.
              </p>
              <p style={{ fontSize: 17, color: "#4b5563", maxWidth: 720, marginTop: 16 }}>
                Experienced in setting product vision, influencing senior stakeholders, and aligning engineering, data science, and business teams around high-impact outcomes across global transaction ecosystems.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
                
                <Button
                  secondary
                  onClick={() => window.open("https://www.linkedin.com/in/marcos-portella-8b610b46/", "_blank", "noreferrer")}
                >
                  View LinkedIn
                </Button>
              </div>
            </div>

            <Card style={{ padding: 16 }}>
              <img
                src={profileImage}
                alt="Marcos Portella"
                style={{ width: "100%", borderRadius: 14, objectFit: "cover", display: "block" }}
              />
              <div style={{ paddingTop: 16 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>Marcos Portella</h3>
                <p style={{ margin: "0 0 6px", color: "#4b5563" }}>Haarlem, Netherlands</p>
                
                <p style={{ margin: 0, color: "#4b5563" }}>Principal / Group PM in Fraud, Payments, Risk, and AI-driven platforms</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="achievements">
        <Container>
          <SectionTitle
            eyebrow="Impact"
            title="Key Achievements"
            subtitle="Selected outcomes that reflect strategic ownership, platform thinking, and measurable business impact."
          />
          <Card>
            <ul style={{ textAlign: "left", paddingLeft: 20, margin: 0 }}>
              {achievements.map((a) => (
                <li key={a} style={{ marginBottom: 14, color: "#374151" }}>
                  {a}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section id="expertise">
        <Container>
          <SectionTitle
            eyebrow="Capabilities"
            title="Core Expertise"
            subtitle="Expertise areas grouped around the decisions, platforms, and leadership scope expected in Principal and Group PM roles."
          />
          <Card>
            <div>
              {expertise.map((e) => (
                <Badge key={e}>{e}</Badge>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <SectionTitle
            eyebrow="Experience"
            title="Career progression across product, fraud, payments, and risk operations"
            subtitle="A progression from operational and analytical roles into product leadership across fraud prevention, authorization, and global payments platforms."
          />
          <div style={{ display: "grid", gap: 24 }}>
            {experience.map((company) => (
              <Card key={company.company}>
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 24 }}>{company.company}</h3>
                  <p style={{ margin: "6px 0 0", color: "#6b7280" }}>{company.location}</p>
                </div>
                <div style={{ display: "grid", gap: 26 }}>
                  {company.roles.map((role) => (
                    <div key={`${company.company}-${role.title}`}>
                      <div style={{ marginBottom: 10 }}>
                        <strong style={{ fontSize: 18 }}>{role.title}</strong>
                        <div style={{ color: "#6b7280", marginTop: 4 }}>{role.period}</div>
                      </div>
                      {role.scope ? (
                        <p
                          style={{
                            margin: "0 0 14px",
                            color: "#4b5563",
                            background: "#f9fafb",
                            border: "1px solid #e5e7eb",
                            padding: 12,
                            borderRadius: 12,
                          }}
                        >
                          {role.scope}
                        </p>
                      ) : null}
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {role.bullets.map((bullet) => (
                          <li key={bullet} style={{ marginBottom: 10, color: "#374151" }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="industry">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            <Card>
              <SectionTitle
                eyebrow="Industry Engagement"
                title="Speaking and thought leadership"
                subtitle="External and internal forums where Marcos has shared perspectives on fraud, AI, and payments strategy."
              />
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {industry.map((item) => (
                  <li key={item} style={{ marginBottom: 12, color: "#374151" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <SectionTitle
                eyebrow="Background"
                title="Education, certifications, and languages"
                subtitle="A compact overview of academic background, certifications, and language fluency."
              />
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {education.map((item) => (
                  <li key={item} style={{ marginBottom: 10, color: "#374151" }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 16, color: "#374151" }}>
                <strong>Languages:</strong> Portuguese (Native), English (Full Professional), Spanish (Full Professional)
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="contact" noBorder>
        <Container>
          <Card style={{ background: "#111", color: "#fff", border: "1px solid #111" }}>
            <p
              style={{
                margin: 0,
                color: "#d1d5db",
                textTransform: "uppercase",
                letterSpacing: 1.4,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Contact
            </p>
            <h2 style={{ margin: "10px 0 12px", fontSize: 32, color: "#fff" }}>
              Open to Principal and Group PM opportunities in fraud, risk, and payments.
            </h2>
            <p style={{ margin: "0 0 18px", color: "#d1d5db", maxWidth: 760 }}>
              Based in Haarlem, working across global payments ecosystems, and focused on building products that create measurable business value.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              
              <Button
                secondary
                onClick={() => window.open("https://www.linkedin.com/in/marcos-portella-8b610b46/", "_blank", "noreferrer")}
              >
                View LinkedIn
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}