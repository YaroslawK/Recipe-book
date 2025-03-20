import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

// Отримати список рецептів з фільтрацією
export const fetchRecipes = async (ingredient?: string, country?: string, category?: string) => {
    let url = "";

    if (ingredient) {
        url = `${API_URL}/filter.php?i=${ingredient}`;
    } else if (country) {
        url = `${API_URL}/filter.php?a=${country}`;
    } else if (category) {
        url = `${API_URL}/filter.php?c=${category}`;
    } else {
        url = `${API_URL}/search.php?s=`;
    }

    const response = await axios.get(url);
    return response.data.meals || [];
};

// Отримати рецепт за ID
export const fetchRecipeById = async (id: string) => {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
};

// Пошук рецепта за назвою
export const searchMealByName = async (name: string) => {
    const response = await axios.get(`${API_URL}/search.php?s=${name}`);
    return response.data.meals || [];
};

// Пошук рецептів за першою літерою
export const searchMealsByFirstLetter = async (letter: string) => {
    const response = await axios.get(`${API_URL}/search.php?f=${letter}`);
    return response.data.meals || [];
};

// Отримати випадковий рецепт
export const fetchRandomMeal = async () => {
    const response = await axios.get(`${API_URL}/random.php`);
    return response.data.meals ? response.data.meals[0] : null;
};

// Отримати 10 випадкових рецептів
export const fetchMultipleRandomMeals = async () => {
    const mealPromises = Array.from({ length: 10 }, () => axios.get(`${API_URL}/random.php`));
    const responses = await Promise.all(mealPromises);

    return responses.map(res => res.data.meals ? res.data.meals[0] : null).filter(meal => meal !== null);
};
