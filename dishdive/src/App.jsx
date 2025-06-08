
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import Footer from './components/Footer';
import { recipes } from './data/recipeData';

const App = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('all');
  const [selectedMeal, setSelectedMeal] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    const flavorMatch = selectedFlavor === 'all' || recipe.flavor === selectedFlavor;
    const mealMatch = selectedMeal === 'all' || recipe.mealType === selectedMeal;
    const searchMatch = searchTerm === '' || 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return flavorMatch && mealMatch && searchMatch;
  });

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <Navigation searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Header />
      <main className="main-content">
        <CategoryFilter 
          selectedFlavor={selectedFlavor}
          selectedMeal={selectedMeal}
          onFlavorChange={setSelectedFlavor}
          onMealChange={setSelectedMeal}
        />
        {searchTerm && (
          <div className="search-results">
            <p>Showing results for: "<span className="search-term">{searchTerm}</span>"</p>
          </div>
        )}
        <div className="recipes-grid">
          {filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id}
              recipe={recipe}
              onClick={() => openRecipe(recipe)}
            />
          ))}
        </div>
        {filteredRecipes.length === 0 && (
          <div className="no-recipes">
            <p>No recipes found for the selected categories{searchTerm && ' or search term'}.</p>
          </div>
        )}
      </main>
      <Footer />
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeRecipe} />
      )}
    </div>
  );
};

export default App;
