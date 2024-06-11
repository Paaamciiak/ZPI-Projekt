import React, { useState, useEffect, useContext} from 'react';
import { Container, FormControl , styled, Box, InputBase, Button, TextareaAutosize} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

//import { DataContext } from '../../context/DataProvider';
import { API} from '../../service/api'
//import { useNavigate} from 'react-router-dom';

const Component = styled(Box)`
    width: 1300px;
    margin: auto;
    margin-top: 100px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 30px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 30px;
    font-size: 18px;
    border: none;
    &: focus-visible {
        outline: none;
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    padding: '20px 0'
});

const initialShop ={
    title: '',
    description: '',
    picture: '',
    username: '',
    categories:'',
    createdDate: new Date()
}

const AddShop = () => {
    //const navigate = useNavigate();

    const [shop, setShop] = useState(initialShop);
    const [file, setFile] = useState('');
    //const { account } = useContext(DataContext);

    const url = shop.picture ? shop.picture : 'https://www.roco-fashion.pl/img/cms/sklep-odziezowy-odziez-damska.jpg';
    /*useEffect(()=>{
        const getImage = async ()=>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file",file.file);

                //API CALL
                const response = await API.uploadFile(data);
                shop.picture = response.data; //TODO
            }

        }
        getImage();
        //shop.categories;
    },[file])*/

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                shop.picture = response.data;
            }
        }
        getImage();
        
        //shop.username = account.username;
    }, [file])

    /*const saveShop = async () => {
        await API.AddShop(shop);
        navigate('/');
    }*/

    const handleChange = (e) => {
        setShop({...shop,[e.target.name]:e.target.value})
    }

    return(
        <Component>
            <Container>
                <Image src={url} alt="shop" />

                <StyledFormControl>
                    <label htmlFor="fileInput">
                        <AddIcon fontSize="large" color="action" />
                    </label>
                    <input 
                        type="file"
                        id="fileInput"
                        style={{display: 'none'}}
                        onChange={(e)=>setFile(e.target.files[0])}
                    />

                    <InputTextField placeholder='Title' onChange={(e)=> handleChange(e)} name="title"/>

                    <Button variant="contained">Publish</Button>

                </StyledFormControl>
                <Textarea
                    minRows={10}
                    placeholder='Add some information'
                    onChange={(e)=> handleChange(e)} 
                    name="description"
                />

            </Container>
        </Component>
        
    )
}

export default AddShop;
