import Link from 'next/link';
import Card from '../card/Card';
import { CardListContainer } from './StyledCardList';

const CardList = ({ humans }) => {
    return (<CardListContainer>
        {humans.map(({ id, name, status, species, gender, image, created, origin, location}) => {
            return <Link href={`/character/${id}`}><a><Card key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                imageUrl={image}
                created={created}
                origin={origin}
                location={location}
            /></a></Link>;
        })}
    </CardListContainer>
    );
}



export default CardList;