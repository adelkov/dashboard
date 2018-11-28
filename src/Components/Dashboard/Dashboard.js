import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../CommonUI/SimpleLineChart/SimpleLineChart';
import SimpleTable from '../CommonUI/SimpleTable/SimpleTable';
import AppBarComponent from "./AppBar/AppBarComponent";
import DrawerComponent from "./Drawer/DrawerComponent";
import {Route} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
});

class Dashboard extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBarComponent
                    open={this.state.open}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <DrawerComponent
                    open={this.state.open}
                    handleDrawerClose={this.handleDrawerClose}
                />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {this.props.children}
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
