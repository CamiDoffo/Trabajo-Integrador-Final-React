import { useState } from "react";
import "./SearchBar.css";
import ICONS from "../../constants/icons";

function SearchBar({ placeholder = "Buscar contacto", onSearch }) {
    const [ value, setValue ] = useState("");

    const handleChange = (e) => {
        const text = e.target.value
        setValue(text)
        if (onSearch) onSearch(text.toLowerCase())
    }

    return (
        <div className="search-bar">
            <ICONS.Search />
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
}
export default SearchBar