import React from 'react'
import {withRouter,useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux'
import '../styles/all_styles.css'
import PinDropIcon from '@material-ui/icons/PinDrop';
import { getSavedOrders,getCartItems,getCartItemsCount, getCartFlag } from "../actions/decathlon_actions";
import { Grid, Card, CardActions, CardContent, Container, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    card: {
        margin: "auto",
        width: 600,
        height: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        backgroundSize: 'contain',
        cursor: 'pointer'
    },
    container: {
        paddingTop: '20px'
    }
}));
function Checkout({...rest}) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    //getSavedOrders

    const onConfirmOrder = () => {
        dispatch(getSavedOrders(cartItems));
        dispatch(getCartItems([]));
        dispatch(getCartItemsCount(0));
        dispatch(getCartFlag(0))
        history.push({
            pathname:'/',
            state:{from:'/checkout'}
        })
    }
    return (
        <React.Fragment>
           <Container className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PinDropIcon className='location_icon' />Deliver to 
                            </Grid>
                            <Grid item xs={12}>
                               #4047, mahbub nagar, vijayapura, devanahalli taluk, bengaluru district.
                            </Grid>
                            <Grid item xs={12}>
                               Delivered By Monday
                            </Grid>
                            <Grid item xs={12}>
                               10 Days Replacement Policy
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button onClick={onConfirmOrder} variant='contained' size='large' className="login_btn">
                            Confirm order
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default withRouter(Checkout);
