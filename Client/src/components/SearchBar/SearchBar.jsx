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
         ({ data }) => {
            console.log(data)
           if (data.name) {
             dispatch(addChar(data));
           } else {
             alert("¡There are no characters with this ID!");
           }
         }
       );
    };

return (
   <div className="container__search">
      
      <input className="input__search" value={id} type="search" onChange={handleChange} placeholder="Enter your id"/>

      
      <button className="button__search button__one" onClick={add}><p>Search</p>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </button>

      <button className="button__search" onClick={randomChar}><p>Random character</p>
      <FontAwesomeIcon icon={faShuffle}/>
      </button>

   </div>
);
}
