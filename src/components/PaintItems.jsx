import React, { useContext } from 'react'
import { AllItemsContext } from './ItemsContext';
import Button from './Button';

const PaintItems = () => {
    const { items, inventory, equipmet, handleClick, infoItems2, setInfoItems2, itemToEquip, setInventory, setItems } = useContext(AllItemsContext);

    const arrayItemsToPrint = (stringg) => {
        if (!stringg) {
            return []
        }
        const arrayItems = [...stringg];

        for (let i = arrayItems.length; i < 16; i++) {
            arrayItems.push('');
        }
        return arrayItems;
    };
    const handleDobleclick = (weapon) => {
        setInventory((prev) => {
            const holdPrev = { ...prev };
            if (holdPrev[weapon.category]?.name == weapon.name) {
                holdPrev[weapon.category] = null
            }
            else {
                holdPrev[weapon.category] = weapon
            }
            return holdPrev;
        })
    };
    const equip = () => {
        handleDobleclick(itemToEquip)
        setInfoItems2(prev => !prev)
    }
    const dropItem = () => {
        setInfoItems2(prev => !prev)
        setItems(prev => {
            const holdPrev = { ...prev }
            const itemFilter = holdPrev?.[equipmet].filter(objItem => objItem.name !== itemToEquip.name)
            holdPrev[equipmet] = itemFilter
            return holdPrev
        })
        setInventory(prev => {
            const holdPrev = { ...prev }
            holdPrev[itemToEquip.category]?.name == itemToEquip.name ? holdPrev[itemToEquip.category] = null : ''
            return holdPrev
        })
    }

    return (
        <div className='flex'>
            <div className='w-[450px] flex gap-4 flex-wrap'>
                {arrayItemsToPrint(items[equipmet]).map((weapon, i) => {
                    const isIconAvailable = weapon.icon && typeof weapon.icon === 'string';
                    const isInventoryWeapon = [inventory.weapon?.icon, inventory.shield?.icon, inventory.helm?.icon, inventory.armor?.icon, inventory.greave?.icon].includes(weapon.icon);

                    return (
                        <div
                            key={i}
                            onClick={() => isIconAvailable ? handleClick(weapon) : ''}
                            onDoubleClick={() => setInfoItems2(prev => !prev)}
                            className={`flex w-24 h-24 rounded-xl cursor-pointer ${isIconAvailable ? 'shadow-md' : ''} ${weapon.icon == itemToEquip.icon ? 'shadow-stone-300 scale-102' : 'shadow-slate-900'} ${isIconAvailable && isInventoryWeapon ? 'bg-gradient-to-t from-blue-800 to-neutral-950' : 'bg-slate-800'}`}
                        >
                            {isIconAvailable ?
                                <div className='relative flex w-[105px] h-[105px]'>
                                    <img className={`border-2 border-stone-300 rounded-xl w-24 h-24 ${weapon.icon == itemToEquip.icon ? 'animate-pulse animate-infinite animate-duration-[1000ms]' : null}`} src={weapon.icon} alt="" />
                                    <div className="absolute bottom-0 right-0 translate-x-2 text-white text-center italic border w-9 h-6 rounded-full bg-slate-800 border-stone-300">{Object.values(weapon?.stats)}</div>
                                </div> 
                                : null}
                        </div>
                    );
                })}

            </div>
            <div className='w-20'>
                <div className={`flex flex-col gap-2 items-center ${infoItems2 ? 'hidden' : ''}`}>
                    <Button onClick={() => equip()} className='bg-blue-400 rounded p-2 focus:bg-blue-700' text={inventory?.[itemToEquip?.category]?.name === itemToEquip.name ? 'Remove' : 'Wield'} />
                    <Button onClick={() => dropItem()} className='bg-blue-400 rounded p-2 focus:bg-blue-700' text={'Drop'} />
                    <Button onClick={() => setInfoItems2(prev => !prev)} className='bg-blue-400 rounded p-2 focus:bg-blue-700' text={'Cancel'} />
                </div>
            </div>
        </div>
    );

}

export default PaintItems