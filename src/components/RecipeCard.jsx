import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image">
        <img src={`${recipe.image}?w=400&h=300&fit=crop`} alt={recipe.name} />
        <div className="recipe-overlay">
          <span className="view-recipe">View Recipe</span>
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="recipe-meta">
          <span className="cooking-time">⏱️ {recipe.cookingTime}</span>
          <span className="servings">👥 {recipe.servings} servings</span>
        </div>
        <div className="recipe-tags">
          <span className="tag flavor-tag">{recipe.flavor}</span>
          <span className="tag meal-tag">{recipe.mealType}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
