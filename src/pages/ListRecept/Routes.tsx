// eslint-disable-next-line import/default
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const ListRecept = React.lazy((): any => import('./ListRecept'));

export const routeObject: RouteObject[] = [
	{
		index: true,
		element: <Navigate replace to="recept" />,
	},
	{
		element: <ListRecept />,
		path: 'recept',
	},
];

export const Routes = () => {
	const element = useRoutes(routeObject);
	return element;
};
