import React, { Fragment } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopIcon from '@material-ui/icons/Shop';
import { Link, useLocation } from "react-router-dom";
import { useStyles } from './NavigationStyling'
import { MenuItem } from '@material-ui/core';
import logo from './../../Assets/Images/logo.png';
import menuIcon from './../../Assets/Images/menu_icon.png';



export default function Navigation(props) {


    const websiteTitle = "AZ MOVIE NIGHTS"
    const classes = useStyles();
    let pathname = useLocation().pathname;
    const [open, setDeskDrawOpen] = React.useState(false);
    const [mobileDrawerState, setmobileDrawerState] = React.useState(false);


    const handleMobileDrawerToggle = () => {
        mobileDrawerState === false ? setmobileDrawerState(true) : setmobileDrawerState(false)
    }


    const handleDesktopDrawerToggle = () => {
        open === false ? setDeskDrawOpen(true) : setDeskDrawOpen(false)
    }


    const handleClose = () => {
        setDeskDrawOpen(true);
        handleDesktopDrawerToggle();
    }


    function renderNavItems(key) {
        return (
            <Fragment>
                {/* Additional Color ''#04122c' */}
                <MenuList key={key} style={{ backgroundColor: '#06163A', color: '#fee2be', paddingLeft: '3px' }} >


                    <MenuItem component={Link} to="/" selected={'/' === pathname} style={{ marginTop: "40px", paddingBottom: '11px' }}>
                        <ListItemIcon><HomeIcon className={classes.HomeIcon} /></ListItemIcon>
                        <ListItemText primary="HOME" />
                        <p style={{
                            marginBottom: '1rem',
                            position: 'absolute',
                            bottom: '-18px',
                            fontSize: '9px',
                            display: (open) ? "none" : "unset"
                        }}>HOME</p>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to="/productList" selected={'/productList' === pathname} style={{ paddingBottom: '11px' }}>
                        <ListItemIcon>
                            <ShopIcon className={classes.ShopIcon} />
                        </ListItemIcon>
                        <ListItemText primary="PRODUCTS" />
                        <p style={{
                            marginBottom: '1rem',
                            position: 'absolute',
                            bottom: '-18px',
                            left: '8px',
                            fontSize: '9px'
                        }}>PRODUCTS</p>
                    </MenuItem>
                    <Divider />

                    <MenuItem component={Link} to="/wishList" selected={'/wishList' === pathname}>
                        <ListItemIcon><FavoriteIcon className={classes.FavoriteIcon} /></ListItemIcon>
                        <ListItemText primary="WISH LIST" />
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to="/faqPage" selected={'/faqPage' === pathname}>
                        <ListItemIcon><ListAltIcon className={classes.ListAltIcon} /></ListItemIcon>
                        <ListItemText primary="FAQS" />
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to="/reservations" selected={'/reservations' === pathname}>
                        <ListItemIcon><ListAltIcon className={classes.ListAltIcon2} /></ListItemIcon>
                        <ListItemText primary="RESERVATIONS" />
                    </MenuItem>
                    <Divider />


                    <MenuItem onClick={() => handleClose()}>
                        <ListItemIcon>
                            <SwapHorizontalCircleIcon className={classes.SwapHorizontalCircleIcon} /></ListItemIcon>
                        <ListItemText primary="CLOSE" />
                    </MenuItem>
                    <Divider />

                </MenuList>
            </Fragment>
        );
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" style={{ backgroundColor: '#0b1120' }} >
                <Toolbar style={{ height: '110px', borderBottom: '10px solid red' }}>
                    {/* <IconButton
                        className={classes.toggleDesktopMenuBtn}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDesktopDrawerToggle}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>  */}

                    <img src={menuIcon} style={{
                        width: '40px',
                        height: '40px',
                        margin: '0 30px 0 -8px',
                    }} />


                    <IconButton
                        className={classes.toggleMobileMenuBtn}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleMobileDrawerToggle}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{ color: '#fee2be' }}>
                        {websiteTitle}
                    </Typography>
                    <img src={logo} style={{ marginLeft: "77%" }} alt="company logo" />
                </Toolbar>
            </AppBar>
            <Drawer
                position="absolute"
                key="desktopDrawer"
                className={classes.desktopDrawer}
                variant="permanent"
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar />
                <div className={classes.desktopDrawerContainer}>
                    {renderNavItems("desktopNav")}
                </div>
            </Drawer>

            {/* Mobile drawer */}

            <Drawer
                key="mobileDrawer"
                anchor="left"
                open={mobileDrawerState}
                onClose={() => handleMobileDrawerToggle(false)}>
                <Toolbar>
                    <Typography variant="h6" noWrap style={{ color: '#fee2be' }}>
                        {websiteTitle}
                    </Typography>
                </Toolbar>
                {renderNavItems("desktopNav")}
            </Drawer>

            <main className={classes.content}>
                <Toolbar />
                {props.children}
            </main>
        </div>
    );
}