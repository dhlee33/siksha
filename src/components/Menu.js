import React,{Component} from 'react'
import './Food.css'
import Food from './Food'
import * as actions from "../actions";
import {connect} from 'react-redux'

class Menu extends Component {


    constructor(props){
        super(props)
        this.state={
            open:true
        }
            this.marking =this.marking.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }
    marking(){
        this.props.mark(this.props.index)
    }

    handleClick(){
        this.marking();

    }

    handleOpen(){
        this.setState({
            open:!this.state.open
        })
        console.log("hi")
    }
    render(){
        return(
            this.state.open?
            <div className="container">
              <div className="restaurant">
                <h1 className="name">
                  <button onClick={this.handleOpen}>-</button>
                    <a>{" "+this.props.restaurant.restaurant+" "}</a>
                    <button onClick={this.marking}>
                        {this.props.bookmark[this.props.index]?"즐겨찾기":"즐겨찾기 해제"}
                    </button>
                </h1>
                <div>
                  {this.props.restaurant.foods.length != 0?
                    this.props.restaurant.foods.map((food,i) =>
                        <Food food={food}
                              key={i}
                              restaurant={this.props.restaurant.restaurant}
                        marked ={this.props.bookmark[this.props.index]}/>):<b>식단이 없습니다.</b>}
                </div>
            </div></div>:
                <div className="container">
                  <div className="restaurant">
                    <h1 className="name">
                      <button onClick={this.handleOpen}>+</button>
                      <a>{" "+this.props.restaurant.restaurant+" "}</a>
                        <button onClick={this.marking}>
                            {this.props.bookmark[this.props.index]?"즐겨찾기":"즐겨찾기 해제"}
                        </button>
                    </h1>
                </div>
              </div>
        )
    }

  componentWillUpdate(nextProps,nextState){
    localStorage.Data = JSON.stringify(nextProps.bookmark)
    //console.log(nextProps.bookmark)
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

