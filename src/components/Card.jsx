export const Card = ({ title, bgColor, color, description, img }) => {
  return (
    <div className="card">
      <span className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}

        <h2>{title}</h2>
        <p>{description}</p>
      </span>
    </div>
  );
};
