
import {Box, styled} from '@mui/material';
import { Component, Textarea } from 'react';


const url = 'https://www.roco-fashion.pl/img/cms/sklep-odziezowy-odziez-damska.jpg';
const Container = styled(Box)`
    border: 1px solid #d3cede;
`;

const Image = styled('img')({});

const Shop = () =>{
    return(
        <Container>
        <Image src={url} alt="shop" />
        <Textarea>hi</Textarea>
        </Container>

    )
}

export default Shop;