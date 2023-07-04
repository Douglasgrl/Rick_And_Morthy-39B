import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faPlus, faShuffle} from '@fortawesome/free-solid-svg-icons'
import { resetPage } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./SearchBar.css"
import { addChar } from "../../redux/actions";
import axios from "axios";

export default function SearchBar({ onSearch }) {

   const [id , setId] = useState("");
   const dispatch = useDispatch()

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   const add = () => {
      onSearch(id);
      dispatch(resetPage())
      setId("");
    };

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1;
      axios(`http://localhost:3001/rickandmorty/character/${numRan}`).then(
         // axios("http://localhost:1222/")
         ({ data }) => {
           if (data.name) {
             dispatch(addChar(data));
           } else {
             window.alert("¡No hay personajes con este ID!");
           }
         }
       );
    };

return (
   <div className="container__search">
      
      <input className="input__search" value={id} type="search" onChange={handleChange} />

      <button className="button__search button__one" onClick={add}>Search
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </button>

      <button className="button__search" onClick={randomChar}>Random character
      <FontAwesomeIcon icon={faShuffle}/>
      </button>

   </div>
);
}
