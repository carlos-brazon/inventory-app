import React from 'react'
import Character from './Character'
import Stats from './Stats'

const CharacterPage = () => {
  return (
    <div className='flex gap-20'>
        <Character />
        <Stats />
    </div>
  )
}

export default CharacterPage