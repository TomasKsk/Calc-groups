import ItemList from "./ItemList";

const Item = ({ id, item, storage, setStorage }) => {

    const handleDelete = (id) => {
        let newObj = {...storage};

        // check if the key exists
        if (newObj[id]) {
            delete newObj[id]
    
            // rename the key
            Object.keys(newObj).map((key, index) => {
                const newKey = `calc_${index + 1}`;
                if (key !== newKey) {
                    newObj[newKey] = newObj[key]; // create a new object inside
                    delete newObj[key]; // delete the old object inside

                    // if name property is the same as the key, rename it accordingly
                    if (newObj[newKey].name === key) {
                        newObj[newKey].name = newKey;
                    }
                }
            });
        } else {
            alert('object key not found');
        }

        setStorage(newObj)
    };

    const handleAdd = () => {
        // find the object key in the object.name
        setStorage(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                mem: [...prev[id].mem, '+', '0'],
                comments: [...prev[id].comments, '...', '...']
            }
        }));
    };

    const headerRename = (e) => {
        setStorage(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                name: e
            }
        }));
    };

    // if the user presses enter the item will be autoblured / focused out
    const handleKeyPress = (e) => {
        if (e.keyCode == 13) {
            e.target.blur()
        }
    }

    return(
        <div id={id} className='bg-white p-2 h-fit shadow-md hover:shadow-xl'>
            {/* header */}
            <div className='flex flex-row justify-between border-b-2 border-black pb-2'>
                <div>
                    <input 
                        type="text"
                        value={item.name}
                        onChange={(e) => headerRename(e.target.value)}
                        className='font-black border-none outline-none w-full pr-1'
                        onClick={(e) => e.target.select()}
                        onKeyDown={(e) => handleKeyPress(e)}
                    />
                </div>
                <p onClick={() => handleDelete(id)}>
                    <Button  text={'x'}/>
                </p>
            </div>
            {/* body */}
            <div>
                <ItemList item={item} id={id} storage={storage} setStorage={setStorage} />
            </div>
            {/* sum */}
            <div className='flex justify-between items-center font-bold border-t-2 border-black pt-2'>
                <h2>{item.sum}</h2>
                <p onClick={handleAdd}>
                    <Button text={'Add'}/>
                </p>
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

export default Item;