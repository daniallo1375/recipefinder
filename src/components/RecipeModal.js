import React from "react";
import "./RecipeModal.css";

const RecipeModal = ({ recipe, onClose }) => {
  const { name, ingredients, cooking_time, instructions, image } = recipe;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={image} alt={name} className="modal-image" />
        <h2 className="modal-title">{name}</h2>
        <p className="modal-cooking-time">⏱️Cooking Time: <strong>{cooking_time} mins</strong></p>
        <div className="modal-section">
          <h3>Ingredients</h3>
          <p>{ingredients.join(", ")}</p>
        </div>
        <div className="modal-section">
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
