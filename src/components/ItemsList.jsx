import React, { useContext, useEffect } from 'react'
import { AllItemsContext } from './ItemsContext';
import PaintItems from './PaintItems';
import Character from './Character';
import InfoItem from './InfoItem';
import weapons from "../assets/sword.png";
import shields from "../assets/shield.png";
import armors from "../assets/armor.png";

const ItemsList = () => {

    const { equipmet, setEquipmet, setInfoItems } = useContext(AllItemsContext);

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-10 items-center'>
                <div className='flex gap-6'>
                    <img onClick={() => [setEquipmet('weapons'), setInfoItems(true)]} className={`w-16 h-16 border bg-blue-400 rounded p-2 shadow-slate-900 shadow-md cursor-pointer ${equipmet === 'weapons' ? 'bg-blue-700 border-2' : ''}`} src={`${weapons}`} alt="mnbkbhjb" />
                    <img onClick={() => [setEquipmet('shields'), setInfoItems(true)]} className={`w-16 h-16 border bg-blue-400 rounded p-2 shadow-slate-900 shadow-md cursor-pointer ${equipmet === 'shields' ? 'bg-blue-700 border-2' : ''}`} src={`${shields}`} alt="mnbkbhjb" />
                    <img onClick={() => [setEquipmet('armors'), setInfoItems(true)]} className={`w-16 h-16 border bg-blue-400 rounded p-2 shadow-slate-900 shadow-md cursor-pointer ${equipmet === 'armors' ? 'bg-blue-700 border-2' : ''}`} src={`${armors}`} alt="mnbkbhjb" />
                </div>
                <PaintItems />
            </div>
            <div className='flex flex-col items-center justify-start gap-4 w-[700px]'>
                <Character />
                <InfoItem />
            </div>
        </div>
    )
}

export default ItemsList