import React, { useState, useEffect } from 'react';

const Storage = ({ display, setDisplay, storage, setStorage, storeIcon, setStoreIcon }) => {
    const storegePos = !storeIcon ? '100%' : '0%'

    return(
        <div 
            style={{height: '75%', right: storegePos, transition: 'right 0.7s ease-in-out'}} 
            className='flex flex-col size-full absolute bottom-0 items-center flex-nowrap bg-gray-200/90 bg-gradient-to-b from-slate-300/50'
        >
                <h1 className='font-black text-xl'>Calculator Storage</h1>
                <div className='size-full p-2'>
                    <div id='calc_01' style={{width:'30%'}} className='bg-white p-2'>
                        <div className='flex flex-row justify-between border-b-2 border-black pb-2'>
                            <h2 className='font-black'>calc_01</h2>
                            <button>x</button>
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <p>5</p>
                                <p>...</p>
                            </div>
                            <p>+</p>
                            <div className='flex gap-4'>
                                <p>5</p>
                                <p>...</p>
                            </div>
                            <p>=</p>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <h2>10</h2>
                            <button>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Storage;