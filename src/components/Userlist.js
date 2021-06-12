import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const style ={
    table: {
        minWidth: 650,
    },
};


class Userlist extends React.Component{
    componentDidMount(){
        }
    render(){
        const { classes }=this.props;
        console.log(this.props.list_of_user);
        return(
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* <TableCell>Id</TableCell> */}
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Created Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.list_of_user && this.props.list_of_user.data && this.props.list_of_user.data.length > 0 && this.props.list_of_user.data.map((userlist, i) => (
                                <TableRow >
                                    <TableCell align="right">{userlist['name']}</TableCell>
                                    <TableCell align="right">{userlist['email']}</TableCell>
                                    <TableCell align="right">{userlist['description']}</TableCell>
                                    <TableCell align="right">{userlist['created_at']}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list_of_user:state.userlist.user_list,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withStyles(style) (connect(mapStateToProps, mapDispatchToProps)(Userlist));