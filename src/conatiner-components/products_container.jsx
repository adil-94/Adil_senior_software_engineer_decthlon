import React from 'react'
import { Grid, Card, CardHeader, CardMedia, CardActions, IconButton, Link, CardActionArea, CardContent, Container, Typography, Divider, Paper, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom';
import { getSelectedProductDeatils, getSelectedCategoryProducts } from '../actions/decathlon_actions'
import '../styles/all_styles.css'

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
        cursor: 'pointer',
        backgroundSize: 'contain',
    },
    container: {
        paddingTop: '20px'
    }
}));
function ProductsContainer() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const categorySelected = useSelector((state) => state.categoryReducer.categorySelected);
    const catagoriesData = useSelector((state) => state.productReducer.catagoriesData);
    console.log("catagoriesData= ", catagoriesData['electronics']);
    let category = [];
    if (categorySelected === 'electronics') {
        category = catagoriesData['electronics']
    } else if (categorySelected === 'fashions') {
        category = catagoriesData['fashions']
    }
    else if (categorySelected === 'groceries') {
        category = catagoriesData['groceries']
    }

    const onBackToHome = (category) => {
        history.push({
            pathname: '/',
            state: { from: category }
        })
    }
    const onProductSelect = (item, category) => {
        dispatch(getSelectedProductDeatils(item));
        history.push({
            pathname: '/product',
            state: { from: item }
        })
    }
    console.log("category= ", category);
    return (
        <React.Fragment>
            <Container className={classes.container}>

                <Paper>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <Button className="back_to_home_btn" variant="outlined" color="primary" href="" onClick={() => onBackToHome(category)}>
                                Back to home
                            </Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h4" color="textPrimary" component="h4">
                                PRODUCTS
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                    {category.map((item) => (
                        <Grid container spacing={0} key={item.id} onClick={() => onProductSelect(item, category)} >
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
        </React.Fragment>
    );
}

export default ProductsContainer;
