import { useState } from "react";


export default function Search({setSearchTerm}) {

    const [userInput, setUserInput] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        setSearchTerm(userInput);
        setUserInput('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Search breed:  
                <input 
                    type='text'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </label>
            <button type="submit" disabled={!userInput}>
                Find
            </button>
        </form>
    )
};
