import React from 'react';

const CategoryFilter = ({ selectedFlavor, selectedMeal, onFlavorChange, onMealChange }) => {
  const flavorCategories = [
    { id: 'all', name: 'All Flavors' },
    { id: 'sweet', name: 'Sweet' },
    { id: 'savoury', name: 'Savoury' },
    { id: 'sour', name: 'Sour' },
    { id: 'spicy', name: 'Spicy' },
    { id: 'bitter', name: 'Bitter' }
  ];

  const mealCategories = [
    { id: 'all', name: 'All Meals' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'festival', name: 'Festival' }
  ];

  return (
    <div className="category-filter">
      <div className="filter-section">
        <h3>Flavor Profile</h3>
        <div className="filter-buttons">
          {flavorCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedFlavor === category.id ? 'active' : ''}`}
              onClick={() => onFlavorChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-section">
        <h3>Meal Type</h3>
        <div className="filter-buttons">
          {mealCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedMeal === category.id ? 'active' : ''}`}
              onClick={() => onMealChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
