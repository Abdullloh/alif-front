import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createRecipe, updateRecipe } from 'store/Actions/Actions';

const RecipeFormPage = () => {
	const [title, setTitle] = useState('');
	const [cup, setCup] = useState('');
	const [cookingTime, setCookingTime] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [gramm, setGramm] = useState('');

	const { id }: any = useParams();

	// const recipeData = useSelector((state: any) => state.recipe);

	const recipeData = useSelector((state: any) =>
		state.recipe.find((recipe: any) => recipe.id === parseInt(id)),
	);
	console.log(recipeData);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (recipeData) {
			setTitle(recipeData.title);
			setCup(recipeData.cup);
			setCookingTime(recipeData.time);
			setIngredients(recipeData.meal);
			setGramm(recipeData.gramm);
		}
	}, [recipeData]);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const newRecipe = {
			title,
			cup,
			cookingTime,
			ingredients,
			gramm,
		};

		if (recipeData) {
			dispatch(updateRecipe(recipeData.id, newRecipe));
		} else {
			dispatch(createRecipe(newRecipe));
		}

		// navigate.push('/');
		navigate({ pathname: '/' });
	};

	return (
		<div>
			<div className="container mx-auto ">
				<h1 className="mainWord">
					{recipeData ? 'Edit Recipe' : 'Crete Recipe'}
				</h1>
				<form onSubmit={handleSubmit} className="flex justify-around ">
					<label className="inline-grid">
						<h6 className="labelText">Title</h6>
						<input
							className="rounded-inpRadius"
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label className="inline-grid ">
						<h6 className="labelText">Cup</h6>
						<input
							className="rounded-inpRadius"
							type="text"
							value={cup}
							onChange={(e) => setCup(e.target.value)}
						/>
					</label>
					<label className="inline-grid">
						<h6 className="labelText">Cooking Time (minutes)</h6>
						<input
							className="rounded-inpRadius"
							type="text"
							value={cookingTime}
							onChange={(e) => setCookingTime(e.target.value)}
						/>
					</label>
					<label className="inline-grid">
						<h6 className="labelText">Ingredients (separated by commas)</h6>
						<input
							className="rounded-inpRadius"
							type="text"
							value={ingredients}
							onChange={(e: any) => setIngredients(e.target.value.split(','))}
						/>
					</label>
					<label className="inline-grid">
						<h6 className="labelText">Gramm </h6>
						<input
							className="rounded-inpRadius"
							type="text"
							value={gramm}
							onChange={(e: any) => setGramm(e.target.value.split(','))}
						/>
					</label>
					<button className="update" type="submit">
						{recipeData ? 'Update' : 'Create'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default RecipeFormPage;
