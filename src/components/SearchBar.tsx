// components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Enter recipe name..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded-md mb-4"
  />
);

export default SearchBar;
