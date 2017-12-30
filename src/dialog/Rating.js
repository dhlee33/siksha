import React,{Component} from 'react';
import * as actions from "../actions";
import {connect} from 'react-redux'

class Rating extends Component {
//({ show, onClose, name,rate }) => {
  // Render nothing if the "show" prop is false
  constructor(props){
    super(props)
  }
  // The gray background
  backdropStyle = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10
  };

  // The modal "window"

  modalStyle = {
    backgroundColor:  '#ffd100',
    borderRadius: 10,
    color: 'black',
    padding: 30
  };

  meal = {
    key: 'siksha1996',
    meal: this.props.name,
    restaurant: this.props.restaurant,
    rating: 0
  }

  render() {
    if (!this.props.show)
      return null;
    return (
      <div className="backdrop" style={this.backdropStyle}>
        <div className="modal" style={this.modalStyle}>
          <div className="footer">
            <button onClick={this.props.onClose()}>
              Close
            </button>
            <h1>{this.props.name}</h1>
            <b>평점 </b>
            <h2>{this.props.rate}</h2>
            <div>
              <b>평점 주기 </b>
              <div>{[1, 2, 3, 4, 5].map((number) => <button onClick={()=>{this.props.rating(number,this.meal)}}>{number}</button>)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch)=>{
  return{
    rating:(body)=>{dispatch(actions.rateRequest(body))}
  }
}

const mapStateToProps = (state)=>{
  return{
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rating)