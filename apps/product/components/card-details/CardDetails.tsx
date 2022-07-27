import React from 'react';
import {
  ContentBox,
  CardKey,
  CardValue,
} from '../card-details/StyledCardDetails';
import { useId } from 'react';

const CardFields = (props) => {
  const id = useId();
  return (
    <>
      {props.details.map((item) => {
        return (
          <ContentBox key={id+item.filedKey}>
            <CardKey data-testid="fieldName">{item.filedKey}</CardKey>
            <CardValue data-testid="fieldValue">{item.fieldValue}</CardValue>
            <hr />
          </ContentBox>
        );
      })}
    </>
  );
};

export default CardFields;
