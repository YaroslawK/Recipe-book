import { Request, Response } from "express";
import { fetchRecipes, fetchRecipeById } from "../services/recipesService";

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
