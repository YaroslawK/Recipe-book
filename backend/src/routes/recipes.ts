import { Router } from "express";
import {
    getRecipes,
    getRecipeById,
    getRecipesByName,
    getRecipesByLetter,
    getRandomRecipe,
    getRandomTenRecipes
} from "../controllers/recipesController";

const router = Router();

// Отримати всі рецепти (з фільтрами)
router.get("/recipes", getRecipes);

// Отримати рецепт за ID
router.get("/recipes/:id", getRecipeById);

// Пошук за назвою
router.get("/recipes", getRecipesByName);  // Використовує query параметр ?name=Arrabiata

// Пошук за першою літерою
router.get("/recipes", getRecipesByLetter);  // Використовує query параметр ?letter=a

// Отримати випадковий рецепт
router.get("/recipes/random", getRandomRecipe);

// Отримати 10 випадкових рецептів
router.get("/recipes/random/ten", getRandomTenRecipes);

export default router;
