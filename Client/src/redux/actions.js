import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT, ADD_CHART, REMOVE_CHAR, RESET_CHARACTERS, RESET_PAGE, SEARCH_CHAR} from "./actionTypes"
import axios from "axios"

export function addChar(char) {
    return { type: ADD_CHART, payload: char };
}

export function searchChar(char) {
  return {
    type: SEARCH_CHAR,
    payload: char,
  };
}

export const addFav = (character) =>{
  
    return function (dispatch) {
        axios
        .post(`http://localhost:3001/rickandmorty/favorite/fav`, character)
        .then(({ data }) => {
            return dispatch({
              type: ADD_FAV,
              payload: data,
            });
          });
      };
}

export function removeChar(id) {
    return { type: REMOVE_CHAR, payload: id };
}

export const removeFav = (id) =>{
    return function (dispatch) {
        axios
          .delete(`http://localhost:3001/rickandmorty/favorite/fav/${id}`)
          .then(({ data }) => {
            return dispatch({
              type: REMOVE_FAV,
              payload: data,
            });
          });
    };
}

export const filterCards = (gender) =>{
    return { type : FILTER , payload: gender}
}

export const orderCards = (order) =>{
    return { type : ORDER , payload: order}
}

export const prev = () =>{
    return{ type : PREV }
}

export const next = () =>{
    return{ type : NEXT }
}

export const resetPage = () => {
    return {
      type: RESET_PAGE,
    };
  }
  export const resetCharacters = () => {
    return {
      type: RESET_CHARACTERS,
    };
  }