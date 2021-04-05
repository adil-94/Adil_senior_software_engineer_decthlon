import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, TextField, CardActions, InputAdornment, Link, CardContent, Typography, Container } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { getSigninFlag, getAuth } from '../actions/decathlon_actions'


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
function Login({...rest}) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameEr, setUsernameEr] = useState(false);
    const [passwordEr, setPasswordEr] = useState(false);

    const creds = useSelector((state) => state.loginReducer.creds);

    const onUserNameChange = (e) => {
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onLogin = () => {
        if(username === creds.username && password === creds.password){
            setUsernameEr(false)
            setPasswordEr(false);
            dispatch(getAuth(true));
            dispatch(getSigninFlag(0));
            let path='/checkout';
            if(rest.location.state === undefined){
                path='/'
            }
            history.push({
                pathname:path,
                state:{from:'/login'}
            })
        }else if(username === creds.username && password !== creds.password){
            setPasswordEr(true)
            setUsernameEr(false)
        }else if(username !== creds.username && password === creds.password){
            setUsernameEr(true)
            setPasswordEr(false)
        }else if(username !== creds.username && password !== creds.password){
            setUsernameEr(true)
            setPasswordEr(true)
        }

    }

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} className="login_avatar">
                                {/* <AccountCircle className="login_avatar_icon" /> */}
                                <LockOpenIcon className="login_avatar_icon"/>
                            </Grid>
                            <Grid item xs={12} className="login_avatar">
                                <Typography variant="h4" color='textPrimary' component="h4">
                                    Login
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={usernameEr}
                                    fullWidth
                                    size="medium"
                                    id="outlined-required"
                                    label={<Typography className="cr_search_font" >Enter User Name</Typography>}
                                    variant="outlined"
                                    onChange={onUserNameChange}
                                    value={username}
                                    helperText={usernameEr ? 'Incorrect User Name' :''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {username.length > 0 ? <ClearIcon className="clear_icon" onClick={() => setUsername('')} /> : ''}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={passwordEr}
                                    fullWidth
                                    size="medium"
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    onChange={onPasswordChange}
                                    value={password}
                                    helperText={passwordEr ? 'Incorrect Password' :''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {password.length > 0 ? <ClearIcon className="clear_icon" onClick={() => setPassword('')} /> : ''}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button onClick={onLogin} variant='contained' size='large' className="login_btn">
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default withRouter(Login);
