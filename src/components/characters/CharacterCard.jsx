import React from 'react'
import { Link } from 'react-router-dom';

//export const CharacterCard = ({ id, name, status, species, type, gender, origin, location, image}) => {
  export const CharacterCard = ({ character }) => {
  //console.log( character);

  return (
    <div className='col-12 col-md-6 col-lg-3 mb-15'>
      <div className="card">
        <img src={ character.image } className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h5 className="card-title">{ character.name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ character.species }</h6>
          <p className="card-text">{ character.type ? character.type : '...' }</p>
          <Link to={`/detalle/${character.id}`} className="btn btn-primary">Detalles</Link>
        </div>
      </div>
    </div>
  )
}
