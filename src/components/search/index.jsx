import { useState } from 'react';
import './styles.css'

const Search = ()=> {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        const {value} = event.target;
        setInputValue(value);
    }

    console.log(inputValue);
    return(
        <form className="Search">
            <input name="Search"
            onChange={handleInput} value={inputValue} placeholder="Search Receipes" id="search"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;