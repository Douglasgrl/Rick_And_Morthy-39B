import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { useSelector } from "react-redux";


export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  const { characters } = useSelector((s) => s);

  useEffect(() => {
    const char = characters?.find((ch) => ch.id === Number(id));
    if (char) setCharacter(char);
    else window.alert("There are no characters with that ID");
    // return setCharacter({});
  }, [id]);

  return (
    <div>
      {character && (
        <div>
          <h1>Name: {character.name}</h1>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
}
