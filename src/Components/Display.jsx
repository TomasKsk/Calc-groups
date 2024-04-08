import React, { useState, useEffect } from 'react';

const Display = ({ display, setDisplay, storage, setStorage }) => {

    // saving to calcStorage
    const handleSave = () => {
        const index = Object.keys(storage).length;

        setStorage(prev => ({
            ...prev,
            [`calc_${index + 1}`]: {
                ...display,
                comments: Array(display.mem.length).fill('')
            }
        }));

        // reset the display
        setDisplay({
            mem: [],
            sum: ''
        })
    };

    useEffect(() => {
        console.log(storage)
    },[storage])

    return(
        <div className='overflow-hidden flex flex-col background w-full h-24 justify-center items-center bg-gradient-to-r border-double border-4 border-gray-200 rounded-t-xl relative'>
            <h1 className='font-bold text-lg text-right pr-2 absolute top-2 right-2'>
                {display.mem}
            </h1>
            <h2 className='font-bold text-4xl text-left pl-4 absolute bottom-2 left-0'>
                {display.sum}
            </h2>
            {/* save icon svg */}
            <button onClick={() => handleSave()} className='font-bold absolute bottom-2 right-2 hover:translate-y-1'>
                {display.mem.length > 0 && <svg className="h-8 w-8 text-slate-500 hover:stroke-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>}
            </button>
        </div>
    )
};


export default Display;
