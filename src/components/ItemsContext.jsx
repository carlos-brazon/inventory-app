import React, { Children, createContext, useEffect, useState } from 'react'

export const AllItemsContext = createContext()
const ItemsContext = ({ children }) => {
    const [items, setItems] = useState({})
    const [inventory, setInventory] = useState({})
    const [equipmet, setEquipmet] = useState('weapons')
    const [infoArmor, setInfoArmor] = useState({})
    const [stats, setStats] = useState({ attack: 10, defense: 10, armor: 15 })
    const [infoItems, setInfoItems] = useState(true)
    const [infoItems2, setInfoItems2] = useState(true)
    const [itemToEquip, setItemToEquip] = useState({})
    const [control, setControl] = useState(true)

    const getItemsFromAppi = async () => {
        const response = await fetch('https://practise-game-inventory.vercel.app/api/items');
        const data = await response.json();
        setItems(data.results);
    }

    useEffect(() => {
        //cambiar el set items aqui
        getItemsFromAppi();
    }, []);

    const handleClick = (weapon) => {
        setItemToEquip(weapon)
        setInfoItems(false)
        setInfoArmor(prev => {
            const holdPrev = { ...prev, name: weapon.name, }
            const arrayStats = Object.entries(weapon.stats)[0]
            const arrayCategory = Object.entries(weapon)[1]
            holdPrev[arrayStats[0]] = arrayStats[1]
            holdPrev[arrayCategory[0]] = arrayCategory[1]
            return holdPrev
        });
    }

    return (
        <AllItemsContext.Provider value={{ items, setItems, inventory, setInventory, equipmet, setEquipmet, handleClick, infoArmor, stats, setStats, infoItems, setInfoItems, itemToEquip, infoItems2, setInfoItems2, control, setControl }}>
            {children}
        </AllItemsContext.Provider>
    )
}

export default ItemsContext;