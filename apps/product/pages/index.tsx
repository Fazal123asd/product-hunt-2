import { useState } from 'react';
import SearchBox from '../components/search-box/SearchBox';
import CardList from '../components/card-list/CardList';
import { getData } from '../utils/data';
import FilterReact from 'filter-react';
import styled from 'styled-components';

type origin = {
  name: string;
};
type location = {
  name: string;
};

export type resultsArray = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  origin: origin;
  location: location;
};

export type character = {
  info: object;
  results: resultsArray[];
};

export type characterProps = {
  data: character;
};

const SearchBoxWrapper = styled('div')({
  width: "100%",
  '@media only screen and (min-width:768px)': {
      width: '30%',
  }
})

const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  alignItems: 'center',
});

export function Index(props: characterProps) {
  const { data } = props;
  const { results } = data;
  const [searchField, setSearchField] = useState('');
  const [filteredCard, setFilterCard] = useState(results);
  const [onOrder, setOrder] = useState('ase');

  const onSearch = () => {
    const newFilteredMonsters = results.filter((result) => {
      return result.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterCard(newFilteredMonsters);
  };
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onFilter = (e) => {
    setOrder(e.target.value);
    const tempArr = filteredCard.sort((a: any, b: any) => {
      return onOrder === 'des' ? a.id - b.id : b.id - a.id;
    });

    setFilterCard([...tempArr]);
  };

  const options = [
    {
      name: 'ASCENDING',
      value: 'ase',
    },
    {
      name: 'DESCENDING',
      value: 'des',
    },
  ];

  return (
    <>
      <FlexContainer>
        <SearchBoxWrapper>
          <SearchBox
            onChangeHandler={onSearchChange}
            onSearchHandler={onSearch}
            placeholder="search"
          />
        </SearchBoxWrapper>

        <FilterReact
          options={options}
          handler={onFilter}
          value={onOrder}
          styles={{
            border: '1px solid gray',
            padding: '0.5rem',
          }}
        />
      </FlexContainer>
      <CardList humans={filteredCard} />
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  const data = await getData<character>(
    `https://rickandmortyapi.com/api/character/`
  );
  if (!data) {
    return <p>Loading...</p>;
  }
  // Pass data to the page via props
  return {
    props: {
      data: data,
    },
  };
}
