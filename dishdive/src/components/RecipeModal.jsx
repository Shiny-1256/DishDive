import React from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={`${recipe.image}?fit=cover`} alt={recipe.name} />
          <div className="modal-title">
            <h2>{recipe.name}</h2>
            <div className="recipe-quick-info">
              <span>⏱️ {recipe.cookingTime}</span>
              <span>👥 {recipe.servings} servings</span>
              <span className="difficulty">🔥 {recipe.difficulty}</span>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="instructions-section">
            <h3>How to Make</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          {recipe.tips && (
            <div className="tips-section">
              <h3>Chef's Tips</h3>
              <p>{recipe.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
