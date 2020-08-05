import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, .7)'
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none'
    },
    modalGridContainer: {
        //backgroundColor: '#f2f2f2',
        // boxShadow: theme.shadows[5],

    },
}));

export default useStyles;