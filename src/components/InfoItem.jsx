import React, { useContext } from 'react'
import { AllItemsContext } from './ItemsContext';
import weapons from "../assets/sword.png";
import shields from "../assets/shield.png";
import armors from "../assets/armor.png";
import arrow from "../assets/arrow.png";

const InfoItem = () => {
    const { infoItems, stats, equipmet, inventory, itemToEquip } = useContext(AllItemsContext);

    const defaultStats = stats?.[equipmet === 'weapons' ? 'attack' : equipmet === 'shields' ? 'defense' : 'armor']
    const type = Object.keys(itemToEquip.stats ? itemToEquip.stats : '')
    const statsWield = inventory?.[itemToEquip.category]?.stats?.[type]
    const statsNoWield = itemToEquip.stats?.[type]
    const statsToCompare = (statsWield ? statsWield : defaultStats)
    console.log(type);

    return (
        <div className={`flex flex-col w-[700px] gap-2 text-white border rounded ${infoItems ? 'hidden' : ''}`}>
            <h1 className='bg-slate-800 text-white text-3xl p-4 rounded'>{itemToEquip?.name}</h1>
            <div className='flex items-center gap-5 p-2'>
                <img className='w-16 h-16' src={`${equipmet === 'weapons' ? weapons : equipmet === 'shields' ? shields : armors}`} alt="" />
                <div className={`flex w-10 h-10 border-2 rounded-full items-center justify-center ${statsToCompare < statsNoWield ? 'border-red-500' : statsToCompare == statsNoWield ? 'border-white' : 'border-lime-400'}`}>{statsWield ?? defaultStats}</div>
                <img className='w-14 h-14' src={`${arrow}`} alt="" />
                <div className={`flex w-10 h-10 border-2 rounded-full items-center justify-center ${statsToCompare > statsNoWield ? 'border-red-500' : statsToCompare == statsNoWield ? 'border-white' : 'border-lime-400'}`}>{statsNoWield}</div>
            </div>
            <div className='p-2'>{itemToEquip.description}</div>
        </div>
    )
}

export default InfoItem