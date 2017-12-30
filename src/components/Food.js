import React,{Component} from 'react';
import './Food.css'
import Rating from '../dialog/Rating';

class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  rateMeal () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { food } = this.props
    var parsedRate = parseFloat(food.rating).toFixed(1)
    return (
      <div className="container">
        <li className="food" onClick={this.rateMeal.bind(this)}>
          <a>{food.price + " "}</a>
          <a>{food.name + " "}</a>
          <a>{parsedRate}</a>
        </li>
          <Rating
              show={this.state.isOpen}
              onClose={() => this.rateMeal.bind(this)}
              name={food.name}
              rate={parsedRate}
              restaurant ={this.props.restaurant}
          />
      </div>
    )
  }
}

export default Food
