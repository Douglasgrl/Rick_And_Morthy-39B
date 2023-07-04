import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import ErrorNot from "./components/ErrorNot/ErrorNot";
import Favorites from "./components/Favorites/Favorites"
import { connect, useDispatch, useSelector} from "react-redux";
import { addFav, removeFav, addChar, removeChar, searchChar} from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const URL = "http://localhost:3001/rickandmorty";


  const [access, setAccess] = useState(false);

  const login = (userData) => {
    axios
    .get(`${URL}/login?password=${userData.password}&email=${userData.email}`)
    .then(({ data }) => {
      if (data.access) {
        setAccess(true);
        navigate("/home");
        return alert("bienvenidos!!!");
      } else {
        return alert("incorrect username or password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const logout = () => {
    axios
      .get(`${URL}/login?password=1234&email=1234`)
      .then(({ data }) => {
        if (!data.access) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          dispatch(searchChar(data));
        } else {
          window.alert("¡There are no characters with this ID!");
        }
      }
    );
  }
  

  const onClose = (id) => {
    dispatch(removeChar(Number(id)));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/allcharacters`)
      .then((result) => {
        dispatch(addChar(result.data));
      });
  }, []);

  useEffect(() => {
    dispatch(addFav({id:"RELOAD"}));
  }, []);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/favorites" element={<Favorites/>}></Route>
        
        <Route path="*" element={<ErrorNot/>}></Route>
      </Routes>
    </div>
  );
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

export default connect(null, mapDispatchToProps)(App);
