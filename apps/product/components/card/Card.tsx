import { getDifferenceYears } from '../../utils/helper';
import { CardContainer, CardHeading, CardBody } from './styledCard';
import CardFields from '../card-details/CardDetails';
import { resultsArray } from '../../pages/index';


function Card(props: resultsArray) {
  const {
    id,
    name,
    status,
    species,
    gender,
    image,
    created,
    origin,
    location,
  } = props;


  const fields = [
    {
      filedKey: 'id',
      fieldValue: id,
    },
    {
      
      filedKey: 'Status',
      fieldValue: status,
    },
    {
      filedKey: 'Species',
      fieldValue: species,
    },
    {
      filedKey: 'Gender',
      fieldValue: gender,
    },
    {
      filedKey: 'Origin',
      fieldValue: origin.name,
    },
    {
      filedKey: 'Location',
      fieldValue: location.name,
    },
  ];
  return (
    <CardContainer data-testid="1">
      <img
        style={{ borderRadius: '10px' }}
        src={image}
        alt={name}
        width="100%"
        height="50%"
      />
      <CardHeading data-testid="cardHeading">
        <h2>{name}</h2>
        <small>{`id:${id} - created ${getDifferenceYears(
         created.slice(0, 10) 
        )} years ago`} </small>
      </CardHeading>
      <CardBody data-testid="cardBody">
        <CardFields details={fields} />
      </CardBody>
    </CardContainer>
  );
}

export default Card;
