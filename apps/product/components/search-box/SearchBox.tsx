import { SearchContainer, SearchInput, SearchButton, SearchLabel } from "./SyledSearchBox";
import { ChangeEvent, MouseEventHandler } from 'react';
type searchBoxProps = {
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    onSearchHandler: MouseEventHandler<HTMLButtonElement>
  };
  
export function SearchBox({
    placeholder,
    onChangeHandler,
    onSearchHandler
}: searchBoxProps) {
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
