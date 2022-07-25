import { useState } from 'react';
import SearchBox from '../components/search-box/SearchBox';
import CardList from '../components/card-list/CardList';

export function Index(props) {
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
  const res = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await res.json();
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
