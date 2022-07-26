import React from 'react';
import { render } from '@testing-library/react';

import CardDetails from '../../../components/card-details/CardDetails';


const cardFieldData = [
  {
    filedKey: 'Status',
    fieldValue: 'Alive',
  },
  {
    filedKey: 'Species',
    fieldValue: 'Human',
  },
  {
    filedKey: 'Gender',
    fieldValue: 'Male',
  },
  {
    filedKey: 'Origin',
    fieldValue: 'Earth (C-137)',
  },
  {
    filedKey: 'Location',
    fieldValue: 'Citadel of Ricks',
  },
];
it('should render card field successfully', () => {
  const { baseElement } = render(<CardDetails details={cardFieldData} />);
  expect(baseElement).toBeTruthy();
});
