import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/Actions/action';
import { userList } from '../store/Actions/action';
const style = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});


class Navbar extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userlogout();
    }
    handleUserlist = (e) => {
        // e.preventDefault();
        this.props.list(this.props.login);

    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Testing
                        </Typography>
                        <Button component={Link} to='/' active color="inherit">Home</Button>
                        {this.props.login == null ?
                            <>
                                <Button component={Link} to='/login' color="inherit">Login</Button>
                                <Button component={Link} to='/register' color="inherit">Register</Button>
                            </>
                            : <>
                                <Button component={Link} to='/userlist' color="inherit" onClick={this.handleUserlist} >User-list</Button>
                                <Button component={Link} to='/register' color="inherit" onClick={this.handleSubmit}>Logout</Button>
                            </>}

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.authlogin.token,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userlogout: () => dispatch(logout()),
        list: (token) => dispatch(userList(token)),
    }
}

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(Navbar));