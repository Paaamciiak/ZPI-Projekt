
import {Box, Typography, styled} from '@mui/material';

const Image = styled(Box)`
    background: url(https://cdn.pixabay.com/photo/2017/08/06/22/52/blouse-2597205_1280.jpg) center/37% repeat-x #000;
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 40px;
    color: #FFFFFF;
    line-height: 1;
`;

const Banner =()=>{
    return(
        <Image>
            <Heading>give clothes another chance</Heading>
            <Typography></Typography>
        </Image>
    )
}

export default Banner;