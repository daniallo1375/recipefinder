import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onViewDetails }) => {
  const { name, image } = recipe;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <button className="view-button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
