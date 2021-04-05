import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Button, Container, Typography, Avatar, Card, CardMedia, FormControl, FormControlLabel, Box, CircularProgress, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../styles/all_styles.css'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { getCartItems, getCartItemsCount } from '../actions/decathlon_actions'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '20px'
    },
    sideImages: {
        width: 'fit-content',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        margin: "auto",
        cursor: 'pointer',
        transition: "0.3s",
    },
    media: {
        height: 480,
        backgroundSize: 'contain',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
        width: '100%',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));
function Product(props) {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch()
    const history = useHistory();

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const auth = useSelector((state) => state.loginReducer.auth);
    const getSelectedProductDeatils = useSelector((state) => state.categoryReducer.getSelectedProductDeatils);
    const categorySelected = useSelector((state) => state.categoryReducer.categorySelected);
    const electronicsData = useSelector((state) => state.productReducer.electronicsData);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const cartItemsCount = useSelector((state) => state.cartReducer.cartItemsCount);
    const [image, setImage] = useState(electronicsData[getSelectedProductDeatils.shortName][0]);

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const onBackToCategories = () => {
        history.push({
            pathname: '/products',
            state: { from: 'products' }
        })
    }

    const onImageHover = (url) => {
        setImage(url)
    }

    const addToCart = (addItem,type) => {
        var items = [...cartItems];
        let found = 0;
        items && items.map((i) => {
            if (i.id === addItem.id) {
                found = 1;
            }
        });
        if (found === 1) {
            var result = items.map(function (el) {
                var o = Object.assign({}, el);
                if (addItem.id === o.id) {
                    o.count++;
                }
                return o;
            })
            dispatch(getCartItems(result));
        } else {
            let newItem = { ...addItem }
            newItem.count = 1;
            items.push(newItem);
            dispatch(getCartItems(items));
        }
        dispatch(getCartItemsCount(cartItemsCount + 1))
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            if(type === 'Buy'){
                history.push('/cart')
            }
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 500);
        }
    }

    return (
        <React.Fragment>
            <Card style={{ boxShadow: 'none' }}>
                <Container className={classes.container}>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <Button className="back_to_home_btn" variant="outlined" color="primary" href="" onClick={onBackToCategories}>
                                Back to {categorySelected}
                            </Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h4" color="textPrimary" component="h4">
                                PRODUCT DETAILS
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={1}>
                            {electronicsData[getSelectedProductDeatils.shortName].map((url) => (
                                <Card className={classes.card} key={url} onMouseOver={() => onImageHover(url)}>
                                    <Avatar alt="Remy Sharp" src={url} variant='square' className='avatar_images_sm' />
                                </Card>
                            ))}
                        </Grid>
                        <Grid item xs={5}>
                            <Card style={{ boxShadow: 'none' }}>
                                <CardMedia
                                    className={classes.media}
                                    image={image}
                                    title="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card style={{ boxShadow: 'none' }}>
                                <Grid container spacing={3} className="product_side_details">
                                    <Grid item xs={12}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {getSelectedProductDeatils.name}
                                        </Typography>
                                        <Typography component="h3">
                                            <Rating name="half-rating-read" defaultValue={getSelectedProductDeatils.star} precision={(getSelectedProductDeatils.star % 1) === 0 ? 1 : 0.5} readOnly />
                                        </Typography>
                                        <Typography variant="h4" color='textPrimary' component="h4">
                                            ₹ {getSelectedProductDeatils.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h3>
                                            Available offers
                                        </h3>
                                    </Grid>
                                    <Grid item xs={3} className="bank_offer">
                                        <FormControl component="fieldset" className="bank_offer_align">
                                            <FormControlLabel value="female" control={<LocalOfferIcon className='offer_icon' />} label={<b>Bank offer</b>} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography component="div">
                                            <Box fontWeight="fontWeightLight" m={1}>
                                                10% off on Axis Bank Credit and Debit Cards, up to ₹750. On orders of ₹2000 and above
                                    </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="bank_offer">
                                        <FormControl component="fieldset" className="bank_offer_align">
                                            <FormControlLabel value="female" control={<LocalOfferIcon className='offer_icon' />} label={<b>Bank offer</b>} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography component="div">
                                            <Box fontWeight="fontWeightLight" m={1}>
                                                10% off on Hdfc Bank Credit and Debit Cards, up to ₹750. On orders of ₹2000 and above
                                    </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="bank_offer">
                                        <FormControl component="fieldset" className="bank_offer_align">
                                            <FormControlLabel value="female" control={<LocalOfferIcon className='offer_icon' />} label={<b>Bank offer</b>} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography component="div">
                                            <Box fontWeight="fontWeightLight" m={1}>
                                                10% off on SBI Bank Credit and Debit Cards, up to ₹750. On orders of ₹2000 and above
                                    </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} className="bank_offer">
                                        <FormControl component="fieldset" className="bank_offer_align">
                                            <FormControlLabel value="female" control={<LocalOfferIcon className='offer_icon' />} label={<b>Bank offer</b>} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography component="div">
                                            <Box fontWeight="fontWeightLight" m={1}>
                                                10% off on ICICI Bank Credit and Debit Cards, up to ₹750. On orders of ₹2000 and above
                                    </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.root}>
                                <div className={classes.wrapper}>
                                    <Button
                                        size='large'
                                        startIcon={<AddShoppingCartIcon />}
                                        className="addtocart_btn"
                                        variant="contained"
                                        color="primary"
                                        disabled={loading}
                                        onClick={() => addToCart(getSelectedProductDeatils,'Add')}
                                    >
                                        Add to cart
                                    </Button>
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <Button onClick={()=>addToCart(getSelectedProductDeatils,'Buy')} className="buynow_btn" variant="contained" startIcon={<FlashOnIcon />} size='large'>
                                BUY NOW
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </React.Fragment>
    );
}

export default Product;
