import {useEffect, useState} from 'react';
import {Box, Grid} from '@mui/material';
import {API} from '../../../service/api';


//components
import Shop from './Shop';
const Shops = () => {

    const [shops, setShops] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllShops();
            if (response.isSuccess){
                setShops(response.data);
            }
        }
        fetchData();
    },[])


    return (
        <>
            {
                shops && shops.length > 0 ? shops.map(shop => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Shop shop={shop}/>
                    </Grid>
                )) : <Box style={{color: '#878787', margin: '30px 80px', fontSize: 18}}>
                    No data available to display
                </Box>
            }
        </>
    )
}

export default Shops;