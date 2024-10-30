// src/tests/unit/RecipesList.test.tsx

import RecipeList from '@/components/RecipeList';
import { render, screen, waitFor } from '@testing-library/react';


test('renders recipes list using real API', async () => {
    //@ts-ignore
  render(<RecipeList />);

  // Verifies that a recipe name from the API response is displayed on the screen
  await waitFor(() => {
    expect(screen.getByText(/some recipe name/i)).toBeInTheDocument();
  });
});

test('displays error message if API fails', async () => {
  // Simulate a network error scenario
  global.fetch = jest.fn(() =>
    Promise.reject(new Error('Failed to fetch'))
  ) as jest.Mock;
//@ts-ignore
  render(<RecipeList />);

  // Verifies that the error message appears if the API request fails
  await waitFor(() => {
    expect(screen.getByText(/Error fetching recipes/i)).toBeInTheDocument();
  });
});
