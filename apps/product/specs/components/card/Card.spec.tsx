import React from 'react';
import { render } from '@testing-library/react';

import Card from '../../../components/card/Card';

describe('Index', () => {
  const cardData = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',

    created: '2017-11-04T18:48:46.250Z',
  };

  it('should render card successfully', () => {
    const { baseElement } = render(<Card {...cardData} />);
    expect(baseElement).toBeTruthy();
  });
});
