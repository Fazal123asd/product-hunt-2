import React from 'react';
import { render } from '@testing-library/react';
import { getServerSideProps } from '../pages/index';
import Index from '../pages/index';

describe('Index', () => {
  window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
            info: {},
            results:[]
      })
  })
);

it("should call character api", async () => {
  const response = await getServerSideProps();
  expect(response).toEqual(
    expect.objectContaining({
      props: {
        data:{
          info: {},
          results:[]
        }
      }
    })
    );
  });

  it('should render successfully', () => {
   const {baseElement} = render(<Index  data={{
        info: {},
        results:[{"id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
        "name": "Earth (C-137)",
       
        },
        "location": {
        "name": "Citadel of Ricks",
        
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
       
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
        },]
    }
    }/>);
    expect(baseElement).toBeTruthy();
  });
});
