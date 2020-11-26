import React from 'react'



function createMeal(meals) {
    console.log(meals[0])
    let ingreList = [];
    for (let i = 1; i <= 20; i++) {
        if (meals[0][`strIngredient${i}`]) {
            ingreList.push(`${meals[0][`strIngredient${i}`]} - ${meals[0][`strMeasure${i}`]}`)
        }
    }
    // console.log(ingreList)
    return (
        <div className='meal-container'>
            <div className='meal-top'>
                <div className='left'>
                    <img src={meals[0].strMealThumb} alt={meals[0].strMeal} />
                    {meals[0].strCategory ? (
                        <p>
                            <strong>Category:</strong> {meals[0].strCategory}
                        </p>
                    ) : null}
                    {meals[0].strArea ? (
                        <p>
                            <strong>Area:</strong> {meals[0].strArea}
                        </p>
                    ) : null}
                    <ul>
                        <p>Ingredients:</p>
                        {ingreList.map((ingredient, index) =>
                            <li key={`strIngredient${index + 1}`}>{ingredient}</li>
                        )}
                    </ul>
                </div>
                <div className='right'>
                    <h1>{meals[0].strMeal}</h1>
                    <p>{meals[0].strInstructions}</p>
                </div>
            </div>
            <div className='meal-video'>
                {meals[0].strYoutube ? (
                    <div>
                        <p>Video Recipe</p>
                        <iframe width="420" height="315"
                            src={"https://www.youtube.com/embed/" + meals[0].strYoutube.slice(-11)}>
                        </iframe>
                    </div>
                ) : null
                }
            </div>
        </div>
    )
};


export function Meal(meals) {
    // console.log(meals)
    // console.log(meals.meals)
    // console.log(meals.meals.meals)
    return (
        <React.Fragment>
            {meals.meals.meals ? createMeal(meals.meals.meals) : null}
        </React.Fragment>
    )
}