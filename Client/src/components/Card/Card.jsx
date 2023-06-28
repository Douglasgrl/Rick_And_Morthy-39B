import { Link, useLocation } from "react-router-dom";
import "./Card.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Paginated from "../Paginated/Paginated";

function Card({ id, onClose, name, status, species, gender, origin, image, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image});
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
            setIsFav(true);
      }
    });
}, [myFavorites]);

  const { pathname } = useLocation()

  return (
    <div className="cards__cont">
      
        <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍" } </button>
      <div>
        { pathname === "/home" && <button onClick={() => onClose(id)}>X</button>}
      </div>

      <h2>{name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>

      <Link to={`/detail/${id}`}>
      <img src={image} alt={name} />
      </Link>

    </div>
  );
}

const mapStateToProps = (state) => {  
  return{
    myFavorites : state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
