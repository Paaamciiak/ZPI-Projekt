
import {Button, styled, TextField, Box} from '@mui/material';
import {Link} from 'react-router-dom';

const StyledButton = styled(Button)`
    margin: 10px;
    width: 200px;
    background: #7D476C;
    color: #fff;
    contained-color: green;
`;


const Wrapper = styled(Box)`
    margin: 20px;
    width: 85%;
    background: #fff;
`

const SearchButton = styled(Button)`
    text-transform: none;
    background: #7D476C;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const Categories = ()=>{
    return(
        <>
            <Wrapper>
                <TextField variant="standard" label="Search"/> 
                <SearchButton variant="contained">Go</SearchButton>
            </Wrapper>
            <Link to='/add'>
                <StyledButton variant="contained">Add Shop</StyledButton>
            </Link>
            <StyledButton variant="contained">Favourites</StyledButton>
        </>
    )
}

export default Categories;