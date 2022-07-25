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
        results:[{id: 1, name: 'Rick Sanchez',
         origin: {name: 'Earth (C-137)'
        },
         location: {name: 'Citadel of Ricks'
        }
        }]
    }
    }/>);
    expect(baseElement).toBeTruthy();
  });
});
