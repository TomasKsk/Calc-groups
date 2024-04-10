import Item from "./Storage/Item";

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
                            return <Item id={a} item={storage[a]} storage={storage} setStorage={setStorage} />
                        })
                    }

                </div>
        </div>
    );
};

export default Storage;
