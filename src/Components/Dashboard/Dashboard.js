import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import SimpleTable from '../SimpleTable/SimpleTable';
import AppBarComponent from "./AppBar/AppBarComponent";
import DrawerComponent from "./Drawer/DrawerComponent";

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
                    <Typography variant="h4" gutterBottom component="h2">
                        Orders
                    </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                        <SimpleLineChart />
                    </Typography>
                    <Typography variant="h4" gutterBottom component="h2">
                        Products
                    </Typography>
                    <div className={classes.tableContainer}>
                        <SimpleTable />
                    </div>
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
