// eslint-disable-next-line import/default
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const RecipeFormPage = React.lazy(
	(): any => import('./RecipeFormPage/RecipeFormPage'),
);
const RecipeDetailPage = React.lazy(
	(): any => import('./RecipeDetailPage/RecipeDetailPage'),
);

export const routeObject: RouteObject[] = [
	{
		index: true,
		element: <Navigate replace to="recipes" />,
	},
	{
		element: <RecipeFormPage />,
		path: 'recipes/new',
	},
	{
		element: <RecipeFormPage />,
		path: 'recipes/:id/edit',
	},
	{
		element: <RecipeDetailPage />,
		path: 'recipes/:id',
	},
];

export const Routes = () => {
	const element = useRoutes(routeObject);
	return element;
};
