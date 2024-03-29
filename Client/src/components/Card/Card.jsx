import { Link, useLocation } from "react-router-dom";
import "./Card.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const { pathname } = useLocation();

  return (
    <div className="cards__cont">

      <div className="face front">

        <img src={image} alt={name} />
        <h2>{name}</h2>
      </div>

      <div className="face back">
    <h2>Status: {status}</h2>
      <div className="button__fav">
        <button className="button__fav--one" onClick={handleFavorite}> {isFav ? "❤️" : "🤍"} </button>
        <div>
          {pathname === "/home" && (
            <button className="button__fav--two" onClick={() => onClose(id)}>X</button>
          )}
        </div>
      </div>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2> 
      <div className="Link">
      <Link to={`/detail/${id}`}>Details +</Link>
      </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

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
