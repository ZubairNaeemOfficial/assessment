// cypress/e2e/recipes.cy.ts

describe('RecipesList Component with API', () => {
    it('fetches and displays recipes', () => {
      cy.visit('http://localhost:3000'); // Update with the correct path if needed
  
      // Verifies that recipe items from the API response are displayed
      cy.contains('some recipe name from API').should('be.visible');
    });
  
    it('displays error on API failure', () => {
      // Simulate API failure by intercepting the request
      cy.intercept('GET', 'https://dummyjson.com/recipes', {
        statusCode: 500,
        body: 'Failed to fetch recipes',
      });
  
      cy.visit('http://localhost:3000');
  
      // Verifies that an error message is displayed when the API fails
      cy.contains('Error fetching recipes').should('be.visible');
    });
  });
  