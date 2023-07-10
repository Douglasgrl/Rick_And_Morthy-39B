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
  
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        character
      );
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeChar(id) {
    return { type: REMOVE_CHAR, payload: id };
}

export const removeFav = (id) =>{
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
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