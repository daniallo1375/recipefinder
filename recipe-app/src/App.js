import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal"; // Modal for details
import sampleRecipes from "./data/recipes.json"; // Local JSON data

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState("");

  // Filter recipes based on the search query
  const filteredRecipes = sampleRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // This triggers the filteredRecipes logic through re-render
  };

  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSearch}
        isLoading={false}
      />
      <div className="container">
        <h2>Our Food Recipes</h2>
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
