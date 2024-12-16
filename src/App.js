import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Import Navbar
import SearchBar from "./components/SearchBar"; // Import SearchBar
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal"; // Modal for details
import sampleRecipes from "./data/recipes.json"; // Local JSON data

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState(""); // Search query state

  // Filter recipes based on the search query
  const filteredRecipes = sampleRecipes.filter((recipe) => {
    // Convert search query and recipe fields to lowercase
    const lowerQuery = query.toLowerCase();
    const lowerName = recipe.name.toLowerCase();
    const lowerIngredients = recipe.ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    );

    // Check if the query matches the recipe name or any ingredient
    return lowerName.includes(lowerQuery) || lowerIngredients.some((ingredient) => ingredient.includes(lowerQuery));
  });

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Trigger re-render to filter the recipes
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Food Recipes</h2>
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSearch}
          isLoading={false}
        />
        <div className="recipes">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewDetails={() => handleViewDetails(recipe)}
              />
            ))
          ) : (
            <p className="error-message">
              <span role="img" aria-label="sad-face">😢</span>
              No recipes found. Try searching for something else!
            </p>
          )}
        </div>

        {selectedRecipe && (
          <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
        )}
      </div>
    </>
  );
}

export default App;
