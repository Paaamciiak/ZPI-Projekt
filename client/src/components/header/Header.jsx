
import {AppBar, Toolbar, Typography, styled} from '@mui/material';
import App from '../../App';
import{Link} from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: #000;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a { 
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const Header =()=>{
    return(
        <Component>
            <Container>
                <Link to = '/'>HOME</Link>
                <Link to='/login'>Login / Register</Link>
            </Container>
        </Component>
    )
}

export default Header;