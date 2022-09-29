import React from 'react'

export const CharacterInfo = ( { character} ) => {
  return (
        <div className='row'>
            <div className='col-12 text-center mt-5 mb-3'><h2>{ character.name }</h2></div>
            <div className='col-12 col-md-4 '>
                <img src={ character.image } className="img-fluid"/>
            </div>
            <div className='col-12 col-md-8 alert alert-primary'>
                <ul className='list-group list-group-flush d-block'>
                    <li className='list-group-item d-block'>
                        <b>Status: </b>{ character.status }
                    </li>
                    <li className='list-group-item d-block'>
                        <b>Specie: </b>{ character.species }
                    </li>
                    <li className='list-group-item d-block'>
                        <b>Type: </b>{ character.type ? character.type : 'N/A' }
                    </li>
                    <li className='list-group-item d-block'>
                        <b>Gender: </b>{ character.gender }
                    </li>
                    <li className='list-group-item d-block'>
                        <b>Origin: </b>{ character.origin.name }
                    </li><li className='list-group-item d-block'>
                        <b>Location: </b>{ character.location.name }
                    </li>

                </ul>
            </div>
    </div>
  )
}
