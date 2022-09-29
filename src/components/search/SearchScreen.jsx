import React from 'react'
import { CharacterList } from '../characters/characterList';

export const SearchScreen = () => {

  return (
    <div className='container animate__animated animate__bounceInLeft'>
        <CharacterList filter={ true } />
    </div>
  )
}
