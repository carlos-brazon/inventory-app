import React, { useContext } from 'react'
import Button from './Button'
import { Outlet } from 'react-router-dom'
import { AllItemsContext } from './ItemsContext';

const Layout = () => {
    const { control, setControl } = useContext(AllItemsContext);
    return (
        <div className='bg-slate-700 animate-fade animate-once justify-start flex flex-col items-center gap-5 h-screen p-4'>
            <h1 className='flex text-4xl text-white '><p className='text-blue-600 animate-wiggle-more animate-infinite text-6xl font-semibold rotate-17'>G</p> <p className='pt-3'>ame Inventory</p></h1>
            <div className='flex gap-5'>
                <Button onClick={() => setControl(prev => prev ? prev : !prev)} text={'Inventory'} className={`border rounded p-2 ${control ? 'bg-green-400' : 'bg-slate-300'}`} link={'/'} />
                <Button onClick={() => setControl(prev => prev ? !prev : prev)} text={'Character'} className={`border rounded p-2 ${!control ? 'bg-green-400' : 'bg-slate-300'}`} link={'character'} />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout