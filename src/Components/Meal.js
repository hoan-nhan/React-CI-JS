import React from 'react'

// export class Meal extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render(){
//         return(
//             <React.Fragment>

//             </React.Fragment>
//         )
//     }
// }

// function createMeal(meals) {
//     <div className='meal-container'>
//         <div className='left'>
//             {meals[0].strMealThumb ? <img src={meals[0].strMealThumb} /> : ""}
//         </div>
//         <div className='right'>

//         </div>
//     </div>
// };
function createMeal(props) {
    <div className='meal-container'>
        <div className='left'>
            {props.mealObj.meals[0].strMealThumb ? <img src={props.mealObj.meals[0].strMealThumb} /> : ""}
        </div>
        <div className='right'>

        </div>
    </div>
};

// export function Meal({ meals }) {
//     return (
//         <React.Fragment>
//             {meals ? createMeal(meals) : ""}
//         </React.Fragment>
//     )
// }
export function Meal(props) {
    return (
        <React.Fragment>
            {props ? createMeal(props) : ""}
        </React.Fragment>
    )
}