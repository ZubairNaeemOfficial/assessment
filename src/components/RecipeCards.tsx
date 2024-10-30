// components/RecipeCard.tsx
import React from 'react';
import { Recipe } from './types';

const RecipeCard: React.FC<Recipe> = ({ name, rating, cookTimeMinutes, image, reviewCount, tags }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center text-gray-500 mt-1">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{rating}</span>
        <span className="ml-1">({reviewCount} reviews)</span>
        <span className="mx-2">•</span>
        <span>{cookTimeMinutes} min</span>
      </div>
      <div className="flex space-x-2 mt-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default RecipeCard;
