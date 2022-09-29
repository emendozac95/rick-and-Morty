import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetchCharacter } from '../../hooks/useFetchCharacter'
import { CharacterInfo } from './CharacterInfo';


export const CharacterDetails = (  ) => {

    const { id } = useParams();

    const {character, isLoading } = useFetchCharacter( id );

  return (
    <>
        {
            isLoading ? 
                (<h2 className='text-center'>Cargando...</h2>) :
                (   <CharacterInfo
                        key={ character.id}
                        character={ character }
                    />
                )
                
        }
    </>
  )
}
