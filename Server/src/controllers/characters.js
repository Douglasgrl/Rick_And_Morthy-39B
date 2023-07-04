const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";
const STATUS_OK = 200;
const STATUS_ERROR = 404;

const EMAIL_USER = "Douglasgrl27@gmail.com";
const PASSWORD_USER = "123";

const login = function (req, res) {
  const { password, email } = req.query;
  if (!password || !email) {
    return res.status(STATUS_ERROR).end("password or email null");
  }
  if (password === PASSWORD_USER && email === EMAIL_USER) {
    res.status(STATUS_OK).json({ access: true });
  } else {
    res.status(STATUS_ERROR).json({ access: false });
  }
};

const getCharacterId = function (req, res) {
  
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then(({ data }) => data)
    .then((ch) => {
      const { id, name, gender, species, origin, image, status } = ch;
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin?.name,
        image,
        status,
      };
      res.status(STATUS_OK).json(character);
    })
    .catch((error) => {
      res.status(STATUS_ERROR).end("character not found");
    });
};

const getAllCharacters = function (req, res) {
  axios.get(`${URL}?page=1`).then((result) => {
    const characters = result.data?.results;
    res.status(STATUS_OK).json(characters);
  });
};

module.exports = {
  getCharacterId,
  login,
  getAllCharacters,
};