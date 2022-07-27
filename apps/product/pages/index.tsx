import { useState } from 'react';
import SearchBox from '../components/search-box/SearchBox';
import CardList from '../components/card-list/CardList';
import { getData } from '../utils/data';

type origin ={
  name: string
}
type location ={
  name: string
}

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
  data: character
};

export function Index(props: characterProps) {
  const { data } = props;
  const { results } = data;
  const [searchField, setSearchField] = useState('');
  const [filteredCard, setFilterCard] = useState(results);

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
  return (
    <>
      <SearchBox
        onChangeHandler={onSearchChange}
        onSearchHandler={onSearch}
        placeholder="search"
      />
      <CardList humans={filteredCard} />
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  const data = await getData<character>(`https://rickandmortyapi.com/api/character/`);
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
