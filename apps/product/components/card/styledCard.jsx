import styled from 'styled-components';

export const CardContainer = styled('div')({
  width: '20vw',
  position: 'relative',
  backgroundColor: '#504C4F',
    margin: '10px',
    borderRadius: '10px',
  "&:hover" :{
    boxShadow: ' 0px 0px 100px #8888',
  },
  '@media only screen and (max-width:420px)': {
    width: '95%',
},
});

export const CardHeading = styled('div')({
  background: 'rgba(35, 35, 36, .7)',
  width: '100%',
  position: 'absolute',
  fontSize: '18px',
  color: 'white',
  padding: '0.5rem',
  marginTop: '-75px'
});

export const CardBody = styled('div')({
  paddingLeft: '32px',
  paddingRight: '32px',
});

