import React from "react";
import "./reviews.css";

const reviewData = [
  {
    name: "Anjuli Nangama",
    date: "2023-03-08",
    rating: 5,
    comment: "They make amazing websites.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Tawi Policy",
    date: "2021-12-30",
    rating: 4.5,
    comment:
      "Madavi offers exemplary service and are quite helpful when it comes to helping the client understand the technical aspect of the work done.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "Lifester Health",
    date: "2023-01-01",
    rating: 4,
    comment: "Exemplary craftsmanship.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "fundiz shop",
    date: "2023-01-01",
    rating: 5,
    comment:
      "we are more than appreciative to the Madavi team for the years of service they have offered us.",
    avatar: "/api/placeholder/40/40",
  },
  {
    name: "aoko rolex",
    date: "2023-01-01",
    rating: 5,
    comment: "Top-notch service delivery",
    avatar: "/api/placeholder/40/40",
  },
];

const ReviewCard = ({ name, date, rating, comment, avatar }) => (
  <div className="review-card">
    <div className="review-header">
      <img src={avatar} alt={name} className="avatar" />
      <div className="review-info">
        <span className="name">{name}</span>
        <span className="date">{date}</span>
      </div>
      <img
        src="/path-to-google-icon.png"
        alt="Google"
        className="google-icon"
      />
    </div>
    <div className="rating">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
    <p className="comment">{comment}</p>
  </div>
);

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-content">
        <h2 className="reviews-title">
          Our Google Reviews<span className="dot">.</span>
        </h2>
        <div className="reviews-grid">
          {reviewData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <div className="google-rating">
          Google rating score: <strong>4.8</strong> of 5, based on{" "}
          <strong>24 reviews</strong>
        </div>
      </div>
      <div className="industry-reports">
        <h3>Industry Reports</h3>
        <p>
          Our team has compiled industry-based reports to help with growing your
          business via digital.
        </p>
        <button className="download-btn">Download Reports</button>
        <img
          src="/path-to-analytics-image.png"
          alt="Analytics"
          className="analytics-image"
        />
      </div>
    </div>
  );
}

export default Reviews;
