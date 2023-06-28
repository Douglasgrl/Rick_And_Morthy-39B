import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faRightFromBracket, faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Nav({ onSearch, logout }) {
  return (
    <div className="Container__nav">
        
        <button>
          <FontAwesomeIcon icon={faHouse} />
          <Link to={"/home"}>Home</Link>
        </button>

        <button>
          <FontAwesomeIcon icon={faHeart}/>
          <Link to={"/favorites"}>Favorites</Link>
        </button>

        <button> 
          <FontAwesomeIcon icon={faAddressCard}/>
          <Link to={"/about"}>About</Link>
        </button>
        
        <SearchBar onSearch={onSearch}/>
        
        <button onClick={logout}>LogOut
        <FontAwesomeIcon icon={faRightFromBracket}/>
        </button>
    </div>
  )
}
