import React,{Component} from 'react'

import Food from './Food'
import * as actions from "../actions";
import {connect} from 'react-redux'

class Menu extends Component {

    constructor(props){
        super(props)
            this.marking =this.marking.bind(this)
    }
    marking(){
        this.props.mark(this.props.index)
        localStorage.Data = JSON.stringify(this.props.bookmark)
    }
    render(){
        return(

            <div>
                <h1>
                    {this.props.restaurant.restaurant}
                    <button onClick={this.marking}>
                        {this.props.bookmark[this.props.index]?"즐겨찾기":"즐겨찾기 해제"}
                    </button>
                </h1>
                <div>
                    {this.props.restaurant.foods.map(food =>
                        <Food food={food}
                        marked ={this.props.bookmark[this.props.index]}/>)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        bookmark:state.mark.bookmark
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        mark:(index)=>{dispatch(actions.bookmark(index))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

