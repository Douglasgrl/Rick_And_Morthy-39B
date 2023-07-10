import React from "react";
import { prev, next } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft} from '@fortawesome/free-solid-svg-icons'
import "./Paginated.css"

export default function Paginated ({ pageNumber, cantPage}) {

  const dispatch = useDispatch()

  return(

   <div>
        <div className="container__paginated">
        {pageNumber <= 1 ? (
          <>
            <button onClick={() => dispatch(prev())} disabled><FontAwesomeIcon icon={faAnglesLeft}/></button>  
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}><FontAwesomeIcon icon={faAnglesLeft}/></button>
            <p>{pageNumber - 1}</p>
          </>
          
        )}
        <h3>{pageNumber}</h3>
        {pageNumber >= cantPage ? (
          <>
            <button onClick={() => dispatch(next())} disabled><FontAwesomeIcon icon={faAnglesRight} /></button>
          </>
        ) : (
          <>
            <p>{pageNumber + 1}</p>
            <button onClick={() => dispatch(next())}><FontAwesomeIcon icon={faAnglesRight} /></button>
          </>
        )}
      </div>

      </div>
  )
  
}
