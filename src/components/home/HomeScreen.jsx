import React from 'react'
import { CharacterList } from '../characters/characterList'

export const HomeScreen = () => {
  return (
    <div className='container animate__animated animate__bounceInLeft'>
      <div className='text-center'><h1>Rick and Morty Characters</h1></div>
        <CharacterList/>
    </div>
  )
}
