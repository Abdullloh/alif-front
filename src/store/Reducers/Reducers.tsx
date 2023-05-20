import { combineReducers } from 'redux';

const initialState: any[] = [
	{
		id: 1,
		title: 'Turkey & avocado toast',
		meal: '1 avocado',
		gramm: '100g turkey slices',
		cup: '½ cup mayonnaise',
		time: '1 hour',
	},
	{
		id: 2,
		title: 'Avocado Dressing',
		meal: '1 avocado',
		gramm: '10g turkey slices',
		cup: '1.2 cup mayonnaise',
		time: '2:30 hours',
	},
	{
		id: 3,
		title: 'Easy Avocado Shake Recipe',
		meal: ' 1 potatot',
		gramm: 'lime slices',
		cup: '3.1 cup ketchup',
		time: '2 hours',
	},
];

const initState: any = {
	id: 1,
	title: 'Turkey & avocado toast',
	meal: '1 avocado',
	gramm: '100g turkey slices',
	cup: '½ cup mayonnaise',
};

const recipeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'CREATE_RECIPE':
			return [...state, { ...action.payload, id: Date.now() }];
		// return {
		// 	...state,
		// 	...action.payload,
		// 	id: Date.now(),
		// };
		case 'UPDATE_RECIPE':
			return state.map((recipe: any) =>
				recipe.id === action.payload.id
					? { ...action.payload.recipe, id: recipe.id }
					: recipe,
			);
		case 'DELETE_RECIPE':
			return state.filter((recipe: any) => recipe.id !== action.payload);
		default:
			return state;
	}
};

const mainReducer = combineReducers({
	recipe: recipeReducer,
});
const rootReducer = (state: any, action: any) => {
	return mainReducer(state, action);
};

export default rootReducer;
