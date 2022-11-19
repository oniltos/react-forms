import { useState } from "react";

const FilterMovies = (props) => {
    const { filterMovies } = props

    const [firstLetter, setFirstLetter] = useState("All")

    const handleSelect = e => {
        setFirstLetter(e.target.value)
        filterMovies(e.target.value)
    } 

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select 
                name="filterMovies" 
                id="filterMovies"
                value={firstLetter}
                onChange={handleSelect}
            >
                <option value="All">ALL</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    );
}
 
export default FilterMovies;