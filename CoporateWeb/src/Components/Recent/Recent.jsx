import React from "react";
import "./recent.css";

// Import images directly
import recent1 from "../../assets/recent1.jpg";
import recent2 from "../../assets/recent2.jpg";
import recent3 from "../../assets/recent3.jpg";
import authorImage from "../../assets/rece.jpg";

const articlesData = [
  {
    id: 1,
    image: recent1,
    category: "EDTECH MARKETING",
    date: "August 29, 2024",
    title:
      "Chatbots Artificial Intelligence: Efficient EdTech Customer Support",
    author: "CodeBlack",
    authorImage: authorImage,
  },
  {
    id: 2,
    image: recent2,
    category: "EDTECH MARKETING",
    date: "August 29, 2024",
    title: "7 Essential Strategies for Building Trust in EdTech:",
    author: "CodeBlack",
    authorImage: authorImage,
  },
  {
    id: 3,
    image: recent3,
    category: "EDTECH MARKETING",
    date: "August 29, 2024",
    title: "7 Powerful Ways Web Accessibility Boosts EdTech Marketing",
    author: "CodeBlack",
    authorImage: authorImage,
  },
];

const ArticleCard = ({ image, category, date, title, author, authorImage }) => (
  <div className="article-card">
    <img src={image} alt={title} className="article-image" />
    <div className="article-content">
      <div className="article-meta">
        <span className="article-category">{category}</span>
        <span className="article-date">{date}</span>
      </div>
      <h3 className="article-title">{title}</h3>
      <div className="article-author">
        <img src={authorImage} alt={author} className="author-image" />
        <span className="author-name">{author}</span>
      </div>
    </div>
  </div>
);

function Recent() {
  return (
    <div className="recent-articles">
      <h2 className="section-title">
        Recent Articles<span className="title-dot">.</span>
      </h2>
      <div className="articles-grid">
        {articlesData.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Recent;
