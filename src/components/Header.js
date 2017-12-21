import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    return(
        <div className = "header">
            <NavLink to ="/bookmarks" className="item"activeClassName = "active">즐겨찾기</NavLink>
            <NavLink exact to="/" className="item"activeClassName = "active">식단</NavLink>
            <NavLink to ="/options" className ="item"activeClassName = "active">설정</NavLink>
        </div>
    )
}

export default Header;