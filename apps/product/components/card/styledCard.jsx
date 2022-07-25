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
  marginTop: '-50px',
});

export const CardBody = styled('div')({
  paddingLeft: '32px',
  paddingRight: '32px',
});

export const CardFieldset = styled('div')({
  borderBottom: '1px solid black',
});

export const ContentBox = styled('div')({
  display: 'flex',
  gap: '0.25rem',
  padding: '0.25rem',
  alignItems: 'center',
  gridArea: 'content',
  justifyContent: 'center',
});

export const CardKey = styled('div')({
  color: 'rgb(211, 216, 224)',
  padding: '0.25rem',
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden ',
  textOverflow: 'ellipsis',
});

export const CardValue = styled(CardKey)({
  textAlign: 'right',
  fontStyle: 'italic',
  color: 'orange',
});