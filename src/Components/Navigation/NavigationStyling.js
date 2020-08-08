import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    toggleDesktopMenuBtn: {
        width: '45px',
        marginRight: '3%',
        backgroundColor: '#041124',
        fontSize: '2.5rem',
        color: '#0b77ce',
        border: '5px solid #f6961b',
        outline: 'none',
        '&:focus': {
            outline: 'none !important',
        }, 
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    toggleMobileMenuBtn: {
        width: '50px',
        marginLeft: '1px',
        fontSize: "2.5rem",
        backgroundColor: '#041124',
        color: '#0b77ce',
        border: '5px solid #f6961b',
        outline: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: 'none',
    },
    desktopDrawer: {
        width: drawerWidth,
        marginTop: '200px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: 1, // necessary for nav to be below app bar
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

    },
    mobileDrawer: {
        width: 10,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

    },
    drawerOpen: {
        width: drawerWidth,
        backgroundColor: '#0b1120',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: '#0b1120',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    HomeIcon: {
        color: '#0a77ce',
        backgroundColor: '#882ecc',
        marginLeft: 5,
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    },
    ShopIcon: {
        color: '#0a77ce',
        backgroundColor: '#38cc2e',
        // color: '#94fb8e',
        // backgroundColor: '#f6961b',
        marginLeft: '5px',
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    },
    FavoriteIcon: {
        color: '#0a77ce',
        backgroundColor: '#c53b2d',
        // color: '#ef6060',
        // backgroundColor: '#f6961b',
        marginLeft: 5,
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    },
    ListAltIcon: {
        color: '#0a77ce',
        backgroundColor: '#f8fb2c',
        //  color: '#ba97ff',
        // backgroundColor: '#f6961b',
        marginLeft: 5,
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    },
    ListAltIcon2: {
        color: '#0a77ce',
        backgroundColor: '#2ebdcc',
        //  color: '#ba97ff',
        // backgroundColor: '#f6961b',
        marginLeft: 5,
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    },
    SwapHorizontalCircleIcon: {
        color: '#0a77ce',
        backgroundColor: '#f6961b',
        // color: '#ff0100',
        // backgroundColor: '#f6961b',
        marginLeft: 5,
        padding: 2,
        fontSize: 22,
        borderRadius: 3,
    }
}));