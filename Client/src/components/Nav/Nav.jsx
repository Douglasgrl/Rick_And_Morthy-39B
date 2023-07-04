import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faRightFromBracket, faHeart } from '@fortawesome/free-solid-svg-icons'
import { resetCharacters } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function Nav({ onSearch, logout }) {

  const dispatch = useDispatch();


  return (
    <div className="Container__nav">
        
        <button className="button__nav" onClick={() => dispatch(resetCharacters())}>
          <FontAwesomeIcon icon={faHouse} />
          <Link to={"/home"}>Home</Link>
        </button>

        <button className="button__nav">
          <FontAwesomeIcon icon={faHeart}/>
          <Link to={"/favorites"}>Favorites</Link>
        </button>

        <button className="button__nav"> 
          <FontAwesomeIcon icon={faAddressCard}/>
          <Link to={"/about"}>About</Link>
        </button>
        
        <SearchBar onSearch={onSearch}/>
        
        <button onClick={logout} className="button__nav button__logout">LogOut
        <FontAwesomeIcon icon={faRightFromBracket}/>
        </button>
    </div>
  )
}
