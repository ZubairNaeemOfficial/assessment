"use client"
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import RecipeList from '../components/RecipeList';
import { Recipe } from './types';
import axios from "axios"

export default function Home() {
  // Typed state variables
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes'); // Change to actual API endpoint if needed
            const data = response.data; // No need for .json()
            console.log(data);
            setRecipes(data.recipes);
            setFilteredRecipes(data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
        
    };

    fetchRecipes();
  }, []);

  // Typed handleSearch function
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterRecipes(query, selectedTag);
  };

  // Typed handleFilter function
  const handleFilter = (tag: string) => {
    setSelectedTag(tag);
    filterRecipes(searchQuery, tag);
  };

  // Typed filterRecipes function
  const filterRecipes = (query: string, tag: string) => {
    let filtered = recipes;

    if (tag !== 'All') {
      filtered = filtered.filter(recipe => recipe.tags.includes(tag));
    }

    if (query) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <SearchBar onSearch={handleSearch} />
      <FilterButtons onFilter={handleFilter} selectedTag={selectedTag} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}
