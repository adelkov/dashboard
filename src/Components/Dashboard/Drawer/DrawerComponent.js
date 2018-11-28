import React from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import {mainListItems, secondaryListItems} from "../listItems/listItems";
import Drawer from "@material-ui/core/Drawer/Drawer";
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';


const drawerWidth = 240;


const styles = theme => ({

    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    }
});

const DrawerComponent = ({classes, open, handleDrawerClose}) => {

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
    );
};

DrawerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired
};

export default withStyles(styles)(DrawerComponent);
