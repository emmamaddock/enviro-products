const Search = ({searchText, handleSearching}) => {

    const handleSearchChange = (event) => {
        handleSearching(event.target.value);
    }

    return (
        <div class="SearchBar">
            <input 
                name="searchText" 
                type="text"
                placeholder="Search Products" 
                value={searchText}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default Search;