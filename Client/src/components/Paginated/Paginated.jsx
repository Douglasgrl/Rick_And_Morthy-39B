import React from "react";
import { prev, next } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Paginated ({ pageNumber, cantPage}) {

  const dispatch = useDispatch()

  return(

   <div>
        <div>
        {pageNumber <= 1 ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}>PREV</button>
            <p>{pageNumber - 1}</p>
          </>
        )}
        <h3>{pageNumber}</h3>
        {pageNumber >= cantPage ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <p>{pageNumber + 1}</p>
            <button onClick={() => dispatch(next())}>NEXT</button>
          </>
        )}
      </div>

      </div>
  )
  
}
