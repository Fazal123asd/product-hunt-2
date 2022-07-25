import Card from '../card/Card';
import { CardListContainer } from './StyledCardList';

const CardList = ({ humans }) => {
    return (<CardListContainer>
        {humans.map(({ id, name, status, species, gender, image, created, origin, location}) => {
            return <Card key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                imageUrl={image}
                created={created}
                origin={origin}
                location={location}
            />;
        })}
    </CardListContainer>
    );
}



export default CardList;
