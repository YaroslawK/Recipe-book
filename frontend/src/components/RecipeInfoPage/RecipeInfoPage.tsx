import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './RecipeInfoPage.module.css';

interface RecipeDetails {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strInstructions: string;
  strCategory: string;
  [key: string]: string | null;
}

const RecipeInfoPage = () => {
  const { idMeal } = useParams(); 
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setRecipe(data.meals ? data.meals[0] : null);
    };

    fetchRecipeInfo();
  }, [idMeal]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.recipeInfo}>
        <div className={styles.recipeImage}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className={styles.recipeDetails}>
          <h1>{recipe.strMeal}</h1>
          <h3>
            <Link to={`/?country=${recipe.strArea}`} className={styles.link}>
              {recipe.strArea}
            </Link>
          </h3>

          <div className={styles.instructions}>
            <h3>Instructions:</h3>
            <p>{recipe.strInstructions}</p>
          </div>
          <div className={styles.ingredients}>
            <h3>Ingredients:</h3>
            <ul>
              {Object.keys(recipe)
                .filter(key => key.includes('strIngredient') && recipe[key])
                .map(key => (
                  <li key={key}>
                    <Link to={`/?ingredient=${recipe[key]}`} className={styles.link}>
                      {recipe[key]}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <h3>Other {recipe.strCategory} Recipes</h3>
        <ul>
          <li>
            <Link to={`/?category=${recipe.strCategory}`} className={styles.link}>
              {recipe.strCategory}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecipeInfoPage;
