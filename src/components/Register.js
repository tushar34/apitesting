import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Authsignup} from '../store/Actions/action';
import { connect } from 'react-redux';

const style = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        description: '',
        profile_photo: '',
    }

    onClickhandle=(e)=>{
        e.preventDefault();
        const {name,email,password,confirm_password,description,profile_photo}= this.state;
        this.props.signup(name, email, password, confirm_password, description, profile_photo);
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="fname"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={this.state.name}
                                    onChange={(e)=>this.setState({[e.target.name]:e.target.value})}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    autoComplete="email"
                                    onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="password"
                                    value={this.state.confirm_password}
                                    autoComplete="current-password"
                                    onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="discription"
                                    name="description"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="discription"
                                    label="Discription"
                                    value={this.state.description}
                                    onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="profile_photo"
                                    // label="Confirm Password"
                                    type="file"
                                    id="file"
                                    autoComplete="file"
                                    onChange={(e)=>this.setState({[e.target.name]:e.target.files[0]['name']})}
                                    // autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onClickhandle}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (name,email,password,password_confirmation,description,profile_photo) => dispatch(Authsignup(name,
                email,
                password,
                password_confirmation,
                description,
                profile_photo))
    }
}


export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(Register));