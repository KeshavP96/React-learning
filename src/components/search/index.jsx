import { useState } from 'react';
import './styles.css'

const Search = (props)=> {

console.log(props);

const {getDataFromSearchComponent} = props;

    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        const {value} = event.target;
        setInputValue(value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        getDataFromSearchComponent(inputValue);
    }

    console.log(inputValue);
    return(
        <form onSubmit={handleSubmit} className="Search">
            <input name="Search"
            onChange={handleInput} value={inputValue} placeholder="Search Receipes" id="search"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;