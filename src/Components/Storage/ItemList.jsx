const ItemList = ({ item, id, storage, setStorage }) => {

    // function from numbers component to recalculate the sum
    const calculate = (item) => {
        let arr = [...item]
        const tempCalc = (arr) => {
            let [a,op,b] = [+arr[0], arr[1], +arr[2]];

            switch(op) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case 'x':
                    return a * b;
                case '/':
                    return a / b;
            };
        };

        let result = tempCalc(arr.splice(0,3));
        console.log(result)
        while(arr.length > 0) {
            result = tempCalc([result, ...arr.splice(0,2)]);
        };
        return result;
    }
 
    // renaming the comment
    const handleComment = (index, e) => {
        setStorage(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                comments: prev[id].comments.map((a,b) => b === index ? e : a) // changing the comment in the array
            }
        }));
    };

    // reentering a number
    const handleNum = (index, e) => {

        setStorage(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                mem: prev[id].mem.map((a,b) => b === index ? e : a)
            }
        }));
    };

    const handleSum = () => {
        setStorage(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                sum: calculate([...item.mem])
            }
        }))
    }

    // if the user presses enter the item will be autoblured / focused out
    const handleKeyPress = (e) => {
        if (e.keyCode == 13) {
            e.target.blur();
        }
    };

    return(
        <>
            {item.mem.map((a, b) => {
                if (isNaN(+a)) {
                    return <p key={b}>{a}</p>; // in case of operator
                } else {
                    return (
                        // in case of a number
                        <div key={b} className='flex gap-4'>
                            <input 
                                type="text"
                                value={item.mem[b]}
                                onChange={(e) => handleNum(b, e.target.value)}
                                className='border-none outline-none w-full pr-1'
                                onClick={(e) => e.target.select()}
                                onKeyDown={(e) => handleKeyPress(e)}
                                onBlur={() => handleSum()}
                            />

                            <input 
                                type="text"
                                value={item.comments[b]}
                                onChange={(e) => handleComment(b, e.target.value)}
                                className='border-none outline-none w-full pr-1'
                                onClick={(e) => e.target.select()}
                                onKeyDown={(e) => handleKeyPress(e)}
                            />
                        </div>
                    );
                }
            })}
            {<p>=</p>}
        </>
    );
};

export default ItemList;