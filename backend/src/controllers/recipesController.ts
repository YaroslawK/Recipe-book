import { Request, Response } from "express";
import {
    fetchRecipes,
    fetchRecipeById,
    searchMealByName,
    searchMealsByFirstLetter,
    fetchRandomMeal,
    fetchMultipleRandomMeals
} from "../services/recipesService";

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const { ingredient, country, category } = req.query;
        const data = await fetchRecipes(ingredient as string, country as string, category as string);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
};

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await fetchRecipeById(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipe details" });
    }
};

export const getRecipesByName = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: "Name query parameter is required" });
        }
        const data = await searchMealByName(name as string);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes by name" });
    }
};

export const getRecipesByLetter = async (req: Request, res: Response): Promise<any> => {
    try {
        const { letter } = req.query;
        if (!letter || letter.length !== 1) {
            return res.status(400).json({ error: "Letter query parameter must be a single character" });
        }
        const data = await searchMealsByFirstLetter(letter as string);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes by first letter" });
    }
};

export const getRandomRecipe = async (_req: Request, res: Response) => {
    try {
        const data = await fetchRandomMeal();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch random recipe" });
    }
};

export const getRandomTenRecipes = async (_req: Request, res: Response) => {
    try {
        const data = await fetchMultipleRandomMeals();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch 10 random recipes" });
    }
};
