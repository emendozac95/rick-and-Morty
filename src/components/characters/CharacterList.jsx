import React from 'react'
import { useSelector } from 'react-redux';
import { useFetchByName } from '../../hooks/useFetchByName';
import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { CharacterCard } from './characterCard';

export const CharacterList = ({ filter = false }) => {
   
    const { characters, isLoading } =  filter ? useFetchByName() : useFetchCharacters();
  return (
    <div>
        <div className='row'>

            {
                isLoading || !characters ? 
                    (<h2 className='text-center'>Cargando...</h2>) :
                    (   
                        characters.payload.length < 1 ?
                        (
                            <div className='alert alert-danger text-center mt-5'><b>Sin resultados</b></div>
                        ):
                        (
                            characters.payload.map( character => (
                                <CharacterCard
                                    key={ character.id}
                                    character={ character }
                                />
                            ))
                        )
                    )
            }
        </div>
    </div>
  )
}
