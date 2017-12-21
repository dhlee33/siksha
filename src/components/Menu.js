import React from 'react'

import Food from './Food'

export default ({ restaurant }) => (
  <div>
    <h1>
      {restaurant.restaurant}
    </h1>
    <div>
      {restaurant.foods.map(food => <Food food={food}>)}
    </div>
  </div>
)
