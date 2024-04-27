import { useState, useEffect } from 'react';

const Display = ({ display, setDisplay, storage, setStorage, storeIcon, setStoreIcon }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
        console.log(window.innerWidth)
        // Add event listener to update window width when the window is resized
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }); // run on each render

    // saving to calcStorage
    const handleSave = () => {
        const index = Object.keys(storage).length;

        setStorage(prev => ({
            ...prev,
            [`calc_${index + 1}`]: {
                ...display,
                comments: Array(display.mem.length).fill('...'),
                name: `calc_${index + 1}`
            }
        }));

        // reset the display
        setDisplay({
            mem: [],
            sum: ''
        })
    };

    const handleMenu = () => {
        setStoreIcon(prev => !prev)
    }

    // Condition for rendering the save icon SVG
    const renderSaveIcon = display.mem.length > 0 && !isNaN(display.mem[display.mem.length - 1]);

    // Condition for rendering the storage icon button
    const renderStorageIcon = window.innerWidth <= 750;

    return (
        <div className='overflow-hidden flex flex-col background w-full min-w-350 min-h-32 min-[750px]:h-60 justify-center items-center bg-gradient-to-r border-double border-8 border-gray-800 rounded-t-xl relative'>
            <h1 className='font-bold text-lg min-[750px]:text-4xl text-right pr-2 absolute top-2 right-2'>
                {/** display memmory */}
                {display.mem}
            </h1>
            <h2 className='font-bold text-4xl min-[750px]:text-6xl text-left pl-4 absolute bottom-2 left-0'>
                {/** display summary */}
                {display.sum}
            </h2>
            {/* save icon svg */}
            {renderSaveIcon && (
                <button onClick={handleSave} className='font-bold absolute bottom-2 right-2 hover:translate-y-1'>
                    <svg className="h-8 w-8 text-slate-500 hover:stroke-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                    </svg>
                </button>
            )}
            {/* storage icon */}
            {renderStorageIcon && (
                <button onClick={() => handleMenu()} className='absolute top-2 left-2 flex h-6 w-6 font-bold text-gray-500 justify-center'>
                {!storeIcon ? (
                    <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                ) : (
                    'X'
                )}
                </button>
            )}
        </div>
    );
};


export default Display;
