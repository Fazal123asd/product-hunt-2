import styled from 'styled-components';

export const CardListContainer = styled('div')({
    backgroundColor:'black',
    width: '100%',
    minHeight: '100vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems:'flex-start',
    flexWrap: 'wrap',
    '@media only screen and (max-width:420px)': {
        flexDirection:'column'
	},
  });
