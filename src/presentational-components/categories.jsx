import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardActions, IconButton, Link, CardContent, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategoryProducts } from '../actions/decathlon_actions'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    card: {
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 50px 100px -24.125px rgba(0,0,0,0.3)"
        }
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
function Categories() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.loginReducer.auth);

    const onCatagorySelect = (id) => {
        dispatch(getSelectedCategoryProducts(id))
        history.push({
            pathname: '/products',
            state: { product: id }
        })
    }
    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Electronics"
                                subheader="20% off"
                            />
                            <CardMedia
                                onClick={() => onCatagorySelect("electronics")}
                                className={classes.media}
                                image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Dashboard/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB655816069_.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => onCatagorySelect("electronics")}
                                >
                                    See more
                            </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Fashion"
                                subheader="Up to 70% off"
                            />
                            <CardMedia
                                onClick={() => onCatagorySelect("fashions")}
                                className={classes.media}
                                image="https://rukminim1.flixcart.com/image/660/792/kgsb1jk0-0/kurta/k/c/4/m-rs-13-14-15-17-shree-laxminarayan-export-original-imafwxxgrvztgqzq.jpeg?q=50"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => onCatagorySelect("fashions")}
                                >
                                    See more
                            </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardHeader
                                title="Grocery"
                                subheader="Flat 50% off"
                            />
                            <CardMedia
                                onClick={() => onCatagorySelect("groceries")}
                                className={classes.media}
                                image="https://m.media-amazon.com/images/I/91SceyQbBOL._AC_UL320_.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => onCatagorySelect("groceries")}
                                >
                                    See more
                            </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Categories;
