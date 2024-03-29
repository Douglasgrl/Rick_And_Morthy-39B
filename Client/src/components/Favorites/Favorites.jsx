import React from "react";
import Card from "../Card/Card";
import { connect, useDispatch} from "react-redux";
import "./Favorite.css" 
import { filterCards, orderCards, allFavorites } from "../../redux/actions";
import { useState } from "react";

const Favorites =({ myFavorites }) =>{

  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()

  const handleOrder = (event) =>{
     dispatch(orderCards(event.target.value))
     setAux(true)
  }

  const handleFilter = (event) =>{
    dispatch(filterCards(event.target.value))
 }

  return (
    <div className="Fav__container">
      <div>

      <select className="select__container" onChange={handleOrder}>
        <option value="A">Upward</option>
        <option value="D">Falling</option>
      </select>

      <select className="select__container" onChange={handleFilter}>
        <option value="allFavorites">All Favorites</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      </div>
      <div className="Fav__cards">
      {
        myFavorites?.map(({ id, name, status, species, gender, origin, image}) => {
        return (
        <Card
        key={id}
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
        image={image}
        />
        );
    })}
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
