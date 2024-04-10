import ItemList from "./ItemList";

const Item = ({ id, item, storage, setStorage }) => {

    const handleDelete = (name) => {
        let newObj = {...storage};
        // find the object key in the object.name
        const id = Object.keys(storage).filter(a => storage[a].name === name)[0]

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
            alert('object key not found')
        }

        setStorage(newObj)
    };

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

export default Item;