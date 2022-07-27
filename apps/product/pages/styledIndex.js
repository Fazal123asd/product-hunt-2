import styled from 'styled-components';

export const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  alignItems: 'center',
});

export const SearchBoxWrapper = styled('div')({
    width: "100%",
    '@media only screen and (min-width:768px)': {
        width: '30%',
    }
})
