import React from 'react'
import {
    Grid, Card, CssBaseline, CardMedia, ButtonGroup, Box, CardActionArea, CardContent, Container, Typography, Divider, Paper, Button, CardActions,
    Drawer, List, ListItem, ListSubheader, ListItemText
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom';
import { getCartItems, getCartItemsCount, getCartFlag } from '../actions/decathlon_actions'
import '../styles/all_styles.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
    },
    card: {
        margin: "auto",
        height: 300,
        display: 'flex',
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 50px 100px -24.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        height: 200,
        backgroundSize: 'contain',
    },
    container: {
        paddingTop: '20px',
    },
    drawerPaper: {
        width: 300,
        top: 64
    }
}));
function Cart() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const categorySelected = useSelector((state) => state.categoryReducer.categorySelected);
    const catagoriesData = useSelector((state) => state.productReducer.catagoriesData);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const cartItemsCount = useSelector((state) => state.cartReducer.cartItemsCount);
    const auth = useSelector((state) => state.loginReducer.auth);
    console.log("cartItems= ", cartItems)

    const onBackToHome = (category) => {
        dispatch(getCartFlag(0))
        history.push({
            pathname: '/',
            state: { from: category }
        })
    }
    const onDecrement = (id) => {
        let items = [...cartItems];
        let index = items.findIndex(x => x.id === id);
        console.log("decrement before= ", items, index, id)
        if (items[index].count === 1) {
            items.splice(index, 1)
        } else {
            items[index].count--;
        }
        dispatch(getCartItems(items))
        dispatch(getCartItemsCount(cartItemsCount - 1))
    }
    const onIncrement = (id) => {
        let items = [...cartItems];
        let index = items.findIndex(x => x.id === id);
        console.log("Increment before= ", items, index, id)
        items[index].count++;
        dispatch(getCartItems(items))
        dispatch(getCartItemsCount(cartItemsCount + 1))
    }
    const onCheckOut = () => {
        console.log("onCheckOut= ",auth);
        if(auth){
            history.push('/checkout',{from:'cart'})
        }else{
            history.push('/login',{from:'cart'})
        }
        dispatch(getCartFlag(0))
    }
    let subtotal = 0, payable = 0, discount = 0;
    cartItems.map((i) => {
        subtotal += (i.price * i.count)
    })
    discount = Math.floor((5 / 100) * subtotal);
    payable = subtotal - discount

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.container} >
                <Paper>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <Button className="back_to_home_btn" variant="outlined" color="primary" href="" onClick={() => onBackToHome('')}>
                                Back to home
                            </Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h4" color="textPrimary" component="h4">
                                CART SUMMARY
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                    {cartItems.map((item) => (
                        <Grid container spacing={0} key={item.id} >
                            <Grid item xs={3}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.src}
                                            title="Contemplative Reptile"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={9}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <Rating name="half-rating-read" defaultValue={item.star} precision={(item.star % 1) === 0 ? 1 : 0.5} readOnly />
                                            </Typography>
                                            <Typography variant="h4" color="textPrimary" component="h4">
                                                ₹ {item.price}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                (5% off)
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid item xs={12}>
                                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                                    <Button onClick={() => onDecrement(item.id)}>{item.count > 1 ? <RemoveIcon /> : <DeleteOutlineIcon />}</Button>
                                                    <Typography component="div" className="button_group">
                                                        <Box fontWeight="fontWeightLight" m={1}>
                                                            {item.count}
                                                        </Box>
                                                    </Typography>
                                                    <Button onClick={() => onIncrement(item.id)}><AddIcon /></Button>
                                                </ButtonGroup>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                    ))}
                </Paper>
            </Container>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <List>
                    <ListItem button key={'Subtotal'}>
                        <ListItemText primary={<Typography variant="h6" color="textPrimary" component="h6">
                            Subtotal({} items): ₹ {subtotal}
                        </Typography>} />
                    </ListItem>
                    <ListSubheader><Typography variant="h6" color="textPrimary" component="h6">
                        Discount: ₹ {discount}
                    </Typography></ListSubheader>
                    <ListItem button key={'Final'}>
                        <ListItemText primary={<Typography variant="h6" color="textPrimary" component="h6">
                            Payable: ₹ {payable}
                        </Typography>} />
                    </ListItem>
                    <ListItem button key={'checkout'}>
                        <Button disabled={cartItems.length === 0} onClick={onCheckOut} className="buynow_btn" variant="contained" startIcon={<TrendingUpIcon />} size='large'>
                            CHECKOUT
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default Cart;
