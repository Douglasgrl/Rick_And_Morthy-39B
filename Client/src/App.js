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
import { connect, useDispatch} from "react-redux";
import { addFav, removeFav, addChar } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const EMAIL = "Douglasgrl27@gmail.com";
  const PASSWORD = "123";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      return navigate("/home");
    }
    return alert("incorrect username or password");

  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const repeat = characters.find(
            (charact) => charact.id === Number(id)
          );
          if (repeat) return alert("Sorry, this character already exists!");

          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("You must enter an id");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("There are no characters with this ID!");
        } else {
          console.error("Request Failed", error);
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((chart) => chart.id !== id));
  };

  useEffect(() => {
    const requests = [];
    for (let num = 22; num < 24; num++) {
      requests.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
      );
    }
    Promise.all(requests)
      .then((results) => {

        let newCharacters = [];
        results.map(
          (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
        );
        dispatch(addChar([...newCharacters]));
      })
      .catch((error) => {});
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
