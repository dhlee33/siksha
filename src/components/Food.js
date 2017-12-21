import React,{Component} from 'react';

import Rating from '../dialog/Rating';

class Menu extends Component {

    constructor(prpos) {
        super(prpos)
        this.state = {
            isOpen: false
        }
    }



    render() {



        return (
            <div onClick={rating.bind(this)}>
                <li><a>{this.props.food.price + " "}</a>
                    <a>{this.props.food.name + " "}</a>
                    <a>{this.props.food.rating}</a>
                    <Rating show={this.state.isOpen}
                           onClose={rating.bind(this)}
                    name = {this.props.food.name}
                    rate = {this.props.food.rating}>
                    </Rating>
                </li>
            </div>)
    }


}


function rating(){
    this.setState({
        ...this.state,
        isOpen: !this.state.isOpen

    })
}



export default Menu