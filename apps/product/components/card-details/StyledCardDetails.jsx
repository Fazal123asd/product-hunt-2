import styled from 'styled-components';

export const ContentBox = styled('div')({
  display: 'flex',
  gap: '0.25rem',
  padding: '0.25rem',
  alignItems: 'center',
  gridArea: 'content',
  justifyContent: 'center',
  borderBottom: '1px solid black',
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
