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

export default ItemList;