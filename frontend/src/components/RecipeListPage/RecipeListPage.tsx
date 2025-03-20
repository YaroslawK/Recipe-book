import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeListPage.module.css';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  [key: string]: string | undefined;
}

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]); 
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]); 
  const [filter, setFilter] = useState(''); 
  const [ingredientFilter, setIngredientFilter] = useState(''); 

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; 
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
        setFilteredRecipes(data.meals); 
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const filterRecipes = () => {
      const filtered = recipes.filter((recipe) => {
        const matchByIngredient = ingredientFilter
          ? Object.keys(recipe)
              .filter((key) => key.includes('strIngredient') && recipe[key])
              .some((key) => recipe[key]?.toLowerCase().includes(ingredientFilter.toLowerCase()))
          : true;

        const matchByName = recipe.strMeal.toLowerCase().includes(filter.toLowerCase());

        return matchByName && matchByIngredient; 
      });

      setFilteredRecipes(filtered);
    };

    filterRecipes();
  }, [filter, ingredientFilter, recipes]); 

  return (
    <div className={styles.container}>
      <h1>{filter ? `Recipes with ${filter}` : 'All Recipes'}</h1>
      <input
        type="text"
        placeholder="Search by recipe name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.filterInput}
      />
      <input
        type="text"
        placeholder="Search by ingredient..."
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
        className={styles.filterInput}
      />

      <div className={styles.recipeList}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.idMeal} className={styles.recipeItem}>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
                <h2>{recipe.strMeal}</h2>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeListPage;
