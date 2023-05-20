import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const RecipeDetailPage = () => {
	const { id }: any = useParams();
	// const recipeData = useSelector((state: any) => state.recipe);

	const recipeData = useSelector((state: any) =>
		state.recipe?.find((recipe: any) => recipe.id === parseInt(id)),
	);
	console.log(recipeData, 'detail deasfas');

	if (!recipeData) {
		return <div>Recipe not found</div>;
	}

	return (
		<div className="container  mx-auto rootDetail">
			<h5 className="mainWord">Detailed page</h5>
			<div className="  overflow-hidden  mb-6 rounded-pagePart detailMain">
				<h5 className="titleText ">{recipeData.title}</h5>
				<p className="detailTitle">{recipeData.cup}</p>
				<p className="detailTitle">{recipeData.gramm} </p>
				<p className="detailTitle">{recipeData.meal} </p>
				<p className="detailTitle">{recipeData.time} </p>
			</div>
			{/* <ul>
				{recipeData.map((ingredient: any, index: any) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul> */}
		</div>
	);
};

export default RecipeDetailPage;
