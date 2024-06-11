/*import express from 'express';
//import {signupUser} from '../controller/user-controller.js'
//import {uploadImage, getImage} from '../controller/image-controller.js';
//import {getAllShops} from '../controller/shop-controller.js'
import upload from '../utils/upload.js';

const router = express.Router();

//router.post('/signup', signupUser);

//router.post('/file/upload', upload.single('file'), uploadImage);
//router.get('/file/:filename', getImage);
//router.get('shops', getAllShops);

export default router;*/





import { addShop, getShop, getAllShops } from '../controller/shop-controller.js';
import express from 'express';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { loginUser, singupUser } from '../controller/user-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);


router.post('/add', addShop);

router.get('/shop/:id', getShop);
router.get('/shops', getAllShops);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);


export default router;



