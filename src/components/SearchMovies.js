import { useState } from "react";

const SearchMovies = (props) => {
    const { searchMovies } = props

    const [search, setSearch] = useState("")

    const handleSearch = e => {
        setSearch(e.target.value)
        searchMovies(e.target.value)
    }

    return ( 
        <div className="SearchMovies">
            <input 
                type="text" 
                placeholder="Type to search" 
                value={search}
                onChange={handleSearch}
            />
        </div>
     );
}
 
export default SearchMovies;