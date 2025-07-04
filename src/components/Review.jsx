// Review.jsx
import { FaStar } from "react-icons/fa";

export const Review = ({ description, img, job, name, stars = 5 }) => {
  const renderStars = () => {
    return Array.from({ length: stars }, (_, i) => (
      <FaStar key={i} color="#f3cd03" />
    ));
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <img className="review-img" src={img} alt={name} />
        <div>
          <h3 className="review-name">{name}</h3>
          <p className="review-job">{job}</p>
        </div>
      </div>
      <p className="review-description">{description}</p>
      <div className="review-stars">{renderStars()}</div>
    </div>
  );
};
