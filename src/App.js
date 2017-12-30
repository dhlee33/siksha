import React, {Component}from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import {connect} from 'react-redux'
import Bookmarks from "./routes/Bookmarks";
import MenuList from "./routes/MenuList";
import Options from "./routes/Options";
import *as actions from './actions'


class App extends Component{
  constructor(props){
    super(props)
  }

    render() {
        return(
          this.props.menuList!=null ?
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path ="/bookmarks"
                               render={()=><Bookmarks time = {this.props.menuList.time}
                                                      data = {this.props.menuList.data}
                                                      bookmark={this.props.bookmark}/>}/>
                        <Route exact path ="/"
                               render={()=><MenuList time = {this.props.menuList.time}
                                                     data = {this.props.menuList.data}/>}/>
                        <Route path ="/options" component = {Options}/>
                    </Switch>
                </div>
            </Router>
        :
            <Router>
            <div>
              <Header/>
              <a> 식단을 불러오는 중 입니다...</a>
            </div>
            </Router>)}

        componentWillMount(){
            const Data = localStorage.Data;
          this.props.getMenu()
            if(Data){
                this.props.localBookmark(JSON.parse(Data))
            }
        }

};

const mapStateToProps = (state)=>{
    return{
        menuList:state.menuList.menu,
      bookmark:state.mark.bookmark
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        localBookmark:(data)=>(dispatch(actions.localBookmark(data))),
      getMenu:()=>(dispatch(actions.getMenuRequest()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)