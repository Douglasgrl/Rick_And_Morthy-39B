import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT, ADD_CHART} from "./actionTypes"

export function addChar(char) {
    return {
      type: ADD_CHART,
      payload: char,
    };
}

export const addFav = (character) =>{
    return { type : ADD_FAV, payload: character }
}

export const removeFav = (id) =>{
    return { type : REMOVE_FAV , payload : id}
}

export const filterCards = (gender) =>{
    return { type : FILTER , payload: gender}
}

export const orderCards = (order) =>{
    return { type : ORDER , payload: order}
}

export const prev = () =>{
    return{ type : PREV}
}

export const next = () =>{
    return{ type : NEXT}
}