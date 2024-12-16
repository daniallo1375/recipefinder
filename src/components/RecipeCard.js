import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onViewDetails }) => {
  const { name, image ,cooking_time} = recipe;


  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-cooking-time"> <strong>⏱️Cooking Time:</strong> {cooking_time} mins</p>
        <button className="view-button" onClick={onViewDetails}>
          View Recipe Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
