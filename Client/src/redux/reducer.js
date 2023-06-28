import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT, ADD_CHART } from "./actionTypes";


const initalState = {
  characters : [],  
  myFavorites: [],
  allCharacters: [],
  pageNumber: 1, 
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CHART:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          characters: [...action.payload],
        };
      }

      return {
        ...state,
        characters: [action.payload, ...state.myFavorites],
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      const filterFavs = state.myFavorites.filter(
        (favs) => favs.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filterFavs,
        allCharacters: filterFavs,
      };

    case FILTER:
      const filterAll = state.allCharacters.filter(
        (charact) => charact.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterAll,
      };

    case ORDER:
      const copyCharac = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? copyCharac.sort((a, b) => a.id - b.id)
            : copyCharac.sort((a, b) => b.id - a.id),
      };
    case PREV:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };
    case NEXT:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };

    default:
      return { ...state };
  }
};

export default reducer;
