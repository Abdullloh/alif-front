// eslint-disable-next-line import/default
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const ListEdit = React.lazy((): any => import('./ListEdit'));

export const routeObject: RouteObject[] = [
	{
		index: true,
		element: <Navigate replace to="list-edit" />,
	},
	{
		element: <ListEdit />,
		path: 'list-edit',
	},
];

export const Routes = () => {
	const element = useRoutes(routeObject);
	return element;
};
