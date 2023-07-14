import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, PREV, NEXT, ADD_CHART, REMOVE_CHAR,RESET_CHARACTERS, RESET_PAGE, SEARCH_CHAR } from "./actionTypes";


const initalState = {
  charactersOr : [], 
  characters : [],
  allFavorites: [],
  myFavorites: [],
  pageNumber: 1, 
};

const reducer = (state = initalState, action) => {
  switch (action.type) {

    case SEARCH_CHAR:
      return {
        ...state,
        characters: [action.payload],
}

    case ADD_CHART:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          characters: [...action.payload],
          charactersOr: [...action.payload],
        };
      }

      return {
        ...state,
        characters: [action.payload, ...state.charactersOr],
        charactersOr: [action.payload, ...state.charactersOr]
      };

      case REMOVE_CHAR:
      const newcharactersOr = state.charactersOr.filter((ch) => {
        return ch.id !== action.payload;
      });
      return {
        ...state,
        characters : newcharactersOr,
        charactersOr: newcharactersOr,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case REMOVE_FAV:
      return{
      ...state,
      myFavorites: action.payload,
      allFavorites: action.payload,
      };

    case FILTER:
      const filterAll = state.allFavorites.filter(
        (charact) => charact.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
        action.payload === "allFavorites"
        ? [...state.allFavorites]
        : filterAll
      };

    case ORDER:
      const copyCharac = [...state.myFavorites];
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

      case RESET_CHARACTERS:
        return {
          ...state,
          characters : [...state.charactersOr],
        };
      case RESET_PAGE:

        return {
          ...state,
          pageNumber: 1,
        };

    default:
      return state;
  }
};

export default reducer;
