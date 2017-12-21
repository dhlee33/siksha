import React,{Component} from 'react';

import Rating from '../dialog/Rating';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.rateMeal = this.rate.bind(this)
  }
  rateMeal () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { food } = this.props
    return (
      <div onClick={rating.bind(this)}>
        <li>
          <a>{food.price + " "}</a>
          <a>{food.name + " "}</a>
          <a>{food.rating}</a>
          <Rating
            show={this.state.isOpen}
            onClose={() => rateMeal()}
            name={food.name}
            rate={food.rating}
          />
        </li>
      </div>
    )
  }
}

export default Menu
