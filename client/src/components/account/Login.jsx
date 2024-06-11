import React, {useState, useContext, useEffect} from 'react';

import {API} from '../../service/api';
//import { DataContext } from '../../context/DataProvider'; 
import {useNavigate} from 'react-router-dom';

import {Box, TextField, Button, styled, Typography} from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    margin-top: 100px
`;

const Image = styled('img')({
    width: 400,
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #7D476C;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error  = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = () => {

    const imageURL = 'https://cdn.pixabay.com/photo/2015/06/20/18/24/dresses-816033_1280.jpg';
    //const [login, setLogin] = useState(loginInitialValues);
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');

    const navigate = useNavigate();
    //const [setAccount] = useContext(DataContext);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    //useEffect(() => {
     //   showError(false);
    //}, [login])

    //const onValueChange = (e) => {
      //  setLogin({ ...login, [e.target.name]: e.target.value });
    //}

    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name]: e.target.value});
    }

    //const loginUser = async () => {
    //    let response = await API.userLogin(login);
     //   if (response.isSuccess) {
      //      showError('');

      //      setAccount({ name: response.data.name, username: response.data.username });
            
        //    setLogin(loginInitialValues);
          //  navigate('/');
        //} else {
         //   showError('Something went wrong! please try again later');
        //}
    //}

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess){
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login')
        } else{
            showError('Something went wrong! Please try again');
        }
    }

    return(
        <Component>
            <Box>
                <Image src={imageURL} alt='Hanger'/>
                {
                    account === 'login' ?

                        <Wrapper>
                            <TextField variant="standard" label="Enter username"/> 
                            <TextField variant="standard" label="Enter password"/>
                            <LoginButton variant="contained">Login</LoginButton>

                            <Text style={{textAlign: 'center'}}>OR</Text>
                            <SignupButton variant="outlined" onClick={()=> toggleSignup()}>Create an account</SignupButton>
                        </Wrapper>:
                        <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name ='name' label="Enter Email"/> 
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name ='username' label="Enter Username"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name ='password' label="Enter Password"/>

                        {error && <Error>{error}</Error>}
                        <SignupButton onClick={() => signupUser()}>Sign up</SignupButton>
                        <Text style={{textAlign: 'center'}}>OR</Text>
                         <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper> 
                }
                      
            </Box>
        </Component>
    )
}

export default Login;






///////////////////////////////////////////////



/*const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://cdn.pixabay.com/photo/2015/06/20/18/24/dresses-816033_1280.jpg';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="app" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Sign up</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;*/