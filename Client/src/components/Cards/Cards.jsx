import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Paginated from "../Paginated/Paginated";
import "./Cards.css"

export default function Cards({ onClose }) {

  const { characters, pageNumber } = useSelector((state) => state);

  const cantCharPerPage = 5;

  let from = (pageNumber - 1) * cantCharPerPage;

  let until = pageNumber * cantCharPerPage;

  let cantPage = Math.floor(characters.length / cantCharPerPage);

  const viewCharacters = characters?.slice(from, until);

  return (
    <div className="cards__container">
      <div className="cards">
      {viewCharacters?.map(
        ({ id, name, status, species, gender, origin, image}) => {
          return (
            <Card
              key={id}
              id={id}
              onClose={onClose}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
            />
          );
        }
      )}
      </div>

        <div>
          <Paginated pageNumber={pageNumber} cantPage={cantPage}></Paginated>
        </div>
      
    </div>
  );
}
