import styled from 'styled-components';

export const SearchContainer = styled('div')({
    display: 'flex',
    alignItems: 'center'
})

export const SearchInput = styled('input')({
    width: '100%',
    padding: '6px 20px',
    margin: ' 8px 0',
    border:'1px solid #ccc',
    boxSizing: 'border-box',
   
})

export const SearchLabel = styled('label')({
    color: '#3D393C',
    fontSize: '0.8rem'
})

export const SearchButton = styled('button')({
    backgroundColor: '#e7e7e7',
    color: 'black',
    padding: '9px 10px',
    fontSize: '12px',
    border:'1px solid black',
    width: '100px'
})
