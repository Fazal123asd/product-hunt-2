import Link from 'next/link';
import Card from '../card/Card';
import { CardListContainer } from './StyledCardList';
import { resultsArray } from '../../pages/index';

type cardListProps = {
    humans: resultsArray[];
  };

const CardList = ({ humans }: cardListProps) => {
    return (<CardListContainer>
        {humans.map(({ id, name, status, species, gender, image, created, origin, location}) => {
            return <Link key={id} href={`/character/${id}`}><a><Card 
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                created={created}
                origin={origin}
                location={location}
            /></a></Link>;
        })}
    </CardListContainer>
    );
}



export default CardList;