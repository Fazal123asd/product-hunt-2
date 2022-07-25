import { SearchContainer, SearchInput, SearchButton, SearchLabel } from "./SyledSearchBox";

export function SearchBox({
    placeholder,
    onChangeHandler,
    onSearchHandler
}) {
    return (
        <>
            <SearchLabel>Search by Name</SearchLabel>
            <SearchContainer>
                <SearchInput
                    type='search'
                    placeholder={placeholder}
                    onChange={onChangeHandler} />
                <SearchButton onClick={onSearchHandler}>Search</SearchButton>
            </SearchContainer>
        </>

    );
}

export default SearchBox;
