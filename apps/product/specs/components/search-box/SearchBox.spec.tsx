import React from 'react';
import { render } from '@testing-library/react';

import SearchBox from '../../../components/search-box/SearchBox'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBox 
        placeholder='Search'
        onChangeHandler={jest.fn()}
        onSearchHandler={jest.fn()}
    />);
    expect(baseElement).toBeTruthy();
  });
});
