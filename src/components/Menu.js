import React,{Component} from 'react';

import Food from './Food'
const Menu=({restaurant})=>{

    const foods = () => {
        return (
            <div>
                {restaurant.foods.map((food, i) => {
                    return (
                        <Food food={food}/>
                    )
                })
                }
            </div>
        )
    }


    return (
        <div>
            <h1>
                {restaurant.restaurant}
            </h1>
                {foods()}
        </div>
    )
}

export default Menu