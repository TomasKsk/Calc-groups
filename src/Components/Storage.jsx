import React, { useState, useEffect } from 'react';

const Storage = ({ display, setDisplay, storage, setStorage, storeIcon, setStoreIcon }) => {
    const storegePos = !storeIcon ? '100%' : '0%';

    return(
        <div 
            style={{height: '75%', right: storegePos, transition: 'right 0.7s ease-in-out'}} 
            className='flex flex-col size-full absolute bottom-0 items-center flex-nowrap bg-gray-200/90 bg-gradient-to-b from-slate-300/50 border-gray-600 border-double border-t-4'
        >
                <h1 className='font-black text-xl'>Calculator Storage</h1>

                <div className='flex size-full p-2 justify-around'>
                    {/* Storage item */}
                    {
                        Object.keys(storage).map(a => {
                            return <Item id={storage[a].name} item={storage[a]} storage={storage} setStorage={setStorage} />
                        })
                    }

                </div>
        </div>
    );
};

export default Storage;



const Item = ({ id, item, storage, setStorage }) => {

    const handleDelete = (id) => {
        let newObj = {...storage};
        console.log(id, newObj)
        if (storage.hasOwnProperty(id)) {
            delete newObj[id]
            console.log('deleted')
            setStorage(newObj)
        }
    }

    return(
        <div id={id} style={{width:'30%'}} className='bg-white p-2 flex flex-col h-fit shadow-md hover:shadow-xl'>
            {/* header */}
            <div className='flex flex-row justify-between border-b-2 border-black pb-2'>
                <h2 className='font-black'>
                    {item.name}
                </h2>
                <p onClick={() => handleDelete(id)}>
                    <Button  text={'x'}/>
                </p>
            </div>
            {/* body */}
            <div>
                <ItemList item={item} />
            </div>
            {/* sum */}
            <div className='flex justify-between items-center font-bold border-t-2 border-black pt-2'>
                <h2>{item.mem[item.mem.length - 1]}</h2>
                <Button text={'Add'}/>
            </div>
        </div>
    );
};

const Button = ({ text }) => {
    return(
        <button className='flex duration-100 bg-gray-200 px-2 border-solid border-2 border-gray-500 rounded-md shadow-md hover:bg-gray-300 active:translate-y-1 active:bg-yellow-100'>
            {text}
        </button>
    );
};

const ItemList = ({ item }) => {
    return(
        <>
            {item.mem.map((a, b) => {
                if (isNaN(+a)) {
                    return <p key={b}>{a}</p>;
                } else {
                    return (
                        <div key={b} className='flex gap-4'>
                            <p>{a}</p>
                            <p>{item.comments[b]}</p>
                        </div>
                    );
                }
            })}
            {<p>=</p>}
        </>
    );
};

