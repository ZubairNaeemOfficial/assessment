import React, { useState } from 'react';
import RecipeCard from './RecipeCards';
import { Recipe } from './types';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [visibleCount, setVisibleCount] = useState(10); // State to manage the number of visible recipes

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.slice(0, visibleCount).map(recipe => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
      {visibleCount < recipes.length && ( // Ensure button shows only if there are more recipes to display
        <button
          onClick={handleShowMore}
          className="col-span-full mt-4 py-2 px-4 border rounded-lg text-yellow-500 hover:bg-yellow-50"
        >
          + Show More
        </button>
      )}
    </div>
  );
};

export default RecipeList;
