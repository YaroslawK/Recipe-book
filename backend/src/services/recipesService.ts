import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (ingredient?: string, country?: string, category?: string) => {
    let url = `${BASE_URL}/search.php?s=`;

    if (ingredient) {
        url = `${BASE_URL}/filter.php?i=${ingredient}`;
    } else if (country) {
        url = `${BASE_URL}/filter.php?a=${country}`;
    } else if (category) {
        url = `${BASE_URL}/filter.php?c=${category}`;
    }

    const response = await axios.get(url);
    return response.data;
};

export const fetchRecipeById = async (id: string) => {
    const url = `${BASE_URL}/lookup.php?i=${id}`;
    const response = await axios.get(url);
    return response.data;
};
