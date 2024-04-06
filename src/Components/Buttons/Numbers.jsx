import './StyledButtons.css'

const Numbers = () => {
    const buttons = [...Array(10).keys(), '.', 'C', '='];

    const handleClick = (e) => {
        const selector = e.target.textContent;
        console.log(+selector)
        
        //we split the conditions by checking if the textcontent after conversion can be a integer
        
    }

    return(
        <div className='allbuttons grid grid-cols-4 grid-flow-row-dense'>
            {
                buttons.map((_,a) => (
                    <button onClick={(e) => handleClick(e)} key={a} type="button" className={` text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-400 font-medium text-4xl aspect-square bg-gray-200 rounded`}>{buttons[a]}</button>
                ))
            }
        </div>
    )
};

export default Numbers;

