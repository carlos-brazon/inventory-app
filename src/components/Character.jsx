import React, { useContext } from 'react'
import { AllItemsContext } from './ItemsContext';

const Character = () => {

  const { inventory, setInventory } = useContext(AllItemsContext);

  const handleClick = (weapon) => {
    setInventory((prev) => {
      const holdPrev = { ...prev };
      if (holdPrev[weapon?.category]?.name == weapon?.name) {
        weapon?.category ? holdPrev[weapon.category] = null : holdPrev.greave = null
      }
      else {
        holdPrev[weapon.category] = weapon
      }
      return holdPrev;
    })
  }

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center gap-6'>
        {inventory?.helm ? <img  onClick={() => handleClick(inventory.helm)} className='flex  w-20 h-20 bg-slate-800  border-2 rounded-xl shadow-md  shadow-white' src={inventory.helm.icon} alt="" /> : <div className='flex shadow-md shadow-slate-900 w-20 h-20 bg-slate-800 border-2 rounded-xl'></div>}
        <div className='flex gap-6'>
          {inventory?.weapon ? <img  onClick={() => handleClick(inventory.weapon)} className='flex  w-20 h-20 bg-slate-800  border-2 rounded-xl shadow-md  shadow-white' src={inventory.weapon.icon} alt="" /> : <div className='flex shadow-md shadow-slate-900 w-20 h-20 bg-slate-800 border-2 rounded-xl'></div>}
          {inventory.armor ? <img  onClick={() => handleClick(inventory.armor)} className='flex  w-20 h-20 bg-slate-800  border-2 rounded-xl shadow-md  shadow-white' src={inventory.armor.icon} alt="" /> : <div className='flex shadow-md shadow-slate-900 w-20 h-20 bg-slate-800 border-2 rounded-xl'></div>}
          {inventory.shield ? <img  onClick={() => handleClick(inventory.shield)} className='flex  w-20 h-20 bg-slate-800 border-2 rounded-xl shadow-md  shadow-white' src={inventory.shield.icon} alt="" /> : <div className='flex shadow-md shadow-slate-900 w-20 h-20 bg-slate-800 border-2 rounded-xl'></div>}
        </div>
        {inventory.greave ? <img  onClick={() => handleClick(inventory.grave)} className='flex  w-20 h-20 bg-slate-800  border-2 rounded-xl shadow-md  shadow-white' src={inventory.greave.icon} alt="" /> : <div className='flex shadow-md shadow-slate-900 w-20 h-20 bg-slate-800 border-2 rounded-xl'></div>}
      </div>
    </div>
  )
}

export default Character;