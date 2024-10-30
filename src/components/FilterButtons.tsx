import React from 'react';

interface FilterButtonsProps {
  onFilter: (tag: string) => void;
  selectedTag: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilter, selectedTag }) => {
  const tags = ["All", "Pizza", "Dessert", "Asian", "Italian", "Snack"];

  return (
    <div className="flex space-x-2 mb-4">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onFilter(tag)}
          className={`px-3 py-1 border rounded-lg ${selectedTag === tag ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
