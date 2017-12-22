import React, {Component}from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux'
import Bookmarks from "./routes/Bookmarks";
import MenuList from "./routes/MenuList";
import Options from "./routes/Options";
import *as actions from './actions'


class App extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path ="/bookmarks"
                               render={()=><Bookmarks time = {this.props.time}
                                                      data = {this.props.data}
                                                      bookmark={this.props.bookmark}/>}/>
                        <Route exact path ="/"
                               render={()=><MenuList time = {this.props.time}
                                                     data = {this.props.data}/>}/>
                        <Route path ="/options" component = {Options}/>
                    </Switch>
                </div>
            </Router>
        )}
        componentWillMount(){
            const Data = localStorage.Data;

            if(Data){
                this.props.localBookmark(JSON.parse(Data))
            }
        }

};

const mapStateToProps = (state)=>{
    return{
        time:state.menu.time,
        data:state.menu.data,
        bookmark:state.mark.bookmark
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        menu:()=>{dispatch(actions.menu())},
        localBookmark:(data)=>(dispatch(actions.localBookmark(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)