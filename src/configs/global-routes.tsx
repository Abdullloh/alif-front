// routes
import AppLayout from 'layouts/AppLayout';
import { lazy } from 'react';
import { RouteObject, Navigate, useRoutes } from 'react-router-dom';
// import tokenService from 'services/token.service';

const ListInfo = lazy(
	(): any => import('pages/RecipePages/RecipeListPage/RecipeListPage'),
);
const RecipeFormPage = lazy(
	(): any => import('pages/RecipePages/RecipeFormPage/RecipeFormPage'),
);
const RecipeDetailPage = lazy(
	(): any => import('pages/RecipePages/RecipeDetailPage/RecipeDetailPage'),
);
const ListEdit = lazy((): any => import('pages/ListEdit/ListEdit'));
const RecipeListPage = lazy(
	(): any => import('pages/RecipePages/RecipeListPage/RecipeListPage'),
);

export enum Routes {
	EMPTY = '',
	MAIN = '/*',
}

export const PrivateRoutes: RouteObject[] = [
	{
		index: true,
		element: <Navigate to="/recipes" replace />,
	},
	{
		path: '',
		element: <AppLayout />,
		children: [
			{
				path: '/recipes',
				element: <RecipeListPage />,
			},
			// {
			// 	path: '/list-info',
			// 	element: <ListInfo />,
			// },
			// {
			// 	path: '/list-edit',
			// 	element: <ListEdit />,
			// },
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
		],
	},
];

// export const PublicRoutes: RouteObject[] = [
// 	{
// 		index: true,
// 		element: <Navigate to="/login" replace />,
// 	},
// 	{
// 		path: '/login',
// 		element: "",
// 	},
// ];

export const GlobalRoutes = () => {
	// const token = tokenService.getToken();
	// const routes = token ? PrivateRoutes : PublicRoutes;
	const routes = PrivateRoutes;
	const element = useRoutes(routes);
	return element;
};
