import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faPlus, faShuffle} from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ onSearch }) {

   const [id , setId] = useState("");

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1;
      onSearch(numRan);
    };

return (
   <div>
      
      <input className="input__search" value={id} type="search" onChange={handleChange} />
      <FontAwesomeIcon icon={faMagnifyingGlass}/>

      <button className="button__search" onClick={()=> {onSearch(id); setId("")}}>Add
      <FontAwesomeIcon icon={faPlus}/>
      </button>

      <button onClick={randomChar}>Random character
      <FontAwesomeIcon icon={faShuffle}/>
      </button>

   </div>
);
}
