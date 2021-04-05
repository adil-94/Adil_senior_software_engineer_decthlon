import React, { useEffect } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Badge, MenuItem, Menu, Box, Button, CssBaseline } from '@material-ui/core';
import AllRouters from '../routers/all_routers';
import { useHistory,withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {getSigninFlag,getCartFlag,getUserLogout} from '../actions/decathlon_actions'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}));
function HomeContainer() {
    const history = useHistory();
    const classes = useStyles();
    const dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    

    const auth = useSelector((state) => state.loginReducer.auth);
    const cartFlag = useSelector((state) => state.cartReducer.cartFlag);
    const cartItemsCount = useSelector((state) => state.cartReducer.cartItemsCount);
    const savedOrders = useSelector((state) => state.savedOrdersReducer.savedOrders);
    console.log("home= savedOrders= ", savedOrders)

    const handleProfileMenuOpen = (event) => {
        if(!auth){
          dispatch(getSigninFlag(1))
        }else if(auth){
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const goToCart = () => {
       dispatch(getCartFlag(1))
    }
    const onSignOut = () => {
        setAnchorEl(null);
        dispatch(getUserLogout())
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography className={classes.title} variant="h4" noWrap>
                        DECATHLON
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={goToCart}>
                            <Badge badgeContent={cartItemsCount} color="secondary">
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>
                                <Button
                                    className="signin_btn"
                                    size="small"
                                    variant='outlined'
                                    endIcon={<ExpandMoreIcon style={{ verticalAlign: 'middle' }} color="contrastText" />}
                                    // onMouseOver={handleProfileMenuOpen}
                                    onClick={handleProfileMenuOpen}>
                                    {auth ? 'Adil' : 'Sign in'}
                                </Button>
                        <Menu
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            id={'primary-search-account-menu'}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={Boolean(anchorEl) && auth}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={onSignOut}><ExitToAppIcon className="menu_icons" color="secondary" />Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {/* <Container className={classes.container}> */}
            <AllRouters />
            {/* </Container> */}
        </React.Fragment>
    );
}
export default (HomeContainer)
