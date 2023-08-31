import React, { useContext } from 'react'
import { AllItemsContext } from './ItemsContext';
import { useEffect } from 'react';

const Stats = () => {
  const { stats, inventory, setStats } = useContext(AllItemsContext);

  useEffect(() => {
    setStats(prev => {
      const holdPrev = { attack: 10, defense: 10, armor: 15 }
      inventory.weapon == null ? holdPrev.attack = 10 : (holdPrev.attack = 10 + (inventory?.weapon?.stats?.damage ?? 0))
      inventory.shield === null ? holdPrev.defense = 10 : (holdPrev.defense = 10 + (inventory?.shield?.stats?.defense ?? 0))

      inventory.helm ? holdPrev.armor += inventory.helm.stats?.armor : holdPrev.armor
      inventory.armor ? holdPrev.armor += inventory.armor.stats.armor : holdPrev.armor
      inventory.greave ? holdPrev.armor += inventory.greave.stats.armor : holdPrev.armor
      return holdPrev
    })
  }, [inventory])
  return (
    <div className='flex flex-col gap-2 text-white font-semibold'>
      <h1 className='text-2xl'>Name: Link</h1>
      <div className='text-2xl'>Attack: {stats.attack}</div>
      <div className='text-2xl'>Defense: {stats.defense}</div>
      <div className='text-2xl'>Armor: {stats.armor}</div>
    </div>
  )
}

export default Stats