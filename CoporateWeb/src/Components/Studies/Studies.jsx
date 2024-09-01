import React from "react";
import "./studies.css";

// Import images directly
import studies1 from "../../assets/studies1.png";
import studies2 from "../../assets/studies2.png";
import studies3 from "../../assets/studies3.png";

const CaseStudyCard = ({ logo, title, description, clientName, date }) => (
  <div className="case-study-card">
    {logo && (
      <img src={logo} alt={`${title} logo`} className="case-study-logo" />
    )}
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="case-study-footer">
      <span>{clientName}</span>
      <span>{date}</span>
    </div>
  </div>
);

const studies = [
  {
    logo: studies1,
    title: "Jaza Rift Ventures",
    description:
      "Jaza Rift Ventures is a venture capital and asset management advisory company solely focused on healthcare in Africa.",
    clientName: "Jaza Rift Ventures",
    date: "2024",
  },
  {
    logo: studies2,
    title: "MMW Advocates LLP",
    description:
      "MMW Advocates LLP, one of Kenya's premier female-led law firms",
    clientName: "MMW Advocates LLP",
    date: "2023",
  },
  {
    logo: studies3,
    title: "HealthTech",
    description:
      "We support government and startups to collaborate on digitally-enabled innovations for health systems in Africa.",
    clientName: "HealthTech Hub Africa",
    date: "",
  },
];

function Studies() {
  return (
    <div className="studies-container">
      <h2>Case Studies</h2>
      <div className="case-studies-grid">
        {studies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  );
}

export default Studies;
