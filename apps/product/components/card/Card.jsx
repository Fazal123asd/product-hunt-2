
import {
    CardContainer, CardHeading, CardBody, CardFieldset, ContentBox, CardKey, CardValue
} from './styledCard';

function Card(props) {
    const { id, name, status, species, gender, imageUrl, created, origin, location} = props
    return (
        <CardContainer>
            <img
                style={{borderRadius: '10px'}}
                src={imageUrl}
                alt={name}
                width="100%"
                height="50%"
            />
            <CardHeading>
                <h2>{name}</h2>
                <small>{`id:${id} ${created}`}</small>
            </CardHeading>
            <CardBody>
                <CardFieldset>
                    <ContentBox>
                        <CardKey>Status</CardKey>
                        <CardValue>{status}</CardValue>
                    </ContentBox>
                </CardFieldset>
                <CardFieldset>
                    <ContentBox>
                        <CardKey>Species</CardKey>
                        <CardValue>{species}</CardValue>
                    </ContentBox>
                </CardFieldset>
                <CardFieldset>
                    <ContentBox>
                        <CardKey>Gender</CardKey>
                        <CardValue>{gender}</CardValue>
                    </ContentBox>
                </CardFieldset>
                <CardFieldset>
                    <ContentBox>
                        <CardKey>Origin</CardKey>
                        <CardValue>{origin.name}</CardValue>
                    </ContentBox>
                </CardFieldset>
                <CardFieldset>
                    <ContentBox>
                        <CardKey>Last Location</CardKey>
                        <CardValue>{location.name}</CardValue>
                    </ContentBox>
                </CardFieldset>
            </CardBody>
        </CardContainer>
    );
}

export default Card;