// actions/recipeActions.js

export const createRecipe = (recipe: any) => {
	return {
		payload: recipe,
		type: 'CREATE_RECIPE',
	};
};

export const updateRecipe = (id: any, recipe: any) => {
	return {
		payload: { id, recipe },
		type: 'UPDATE_RECIPE',
	};
};

export const deleteRecipe = (id: any) => {
	return {
		payload: id,
		type: 'DELETE_RECIPE',
	};
};
