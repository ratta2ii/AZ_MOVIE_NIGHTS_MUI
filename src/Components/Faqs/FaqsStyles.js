import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(0,0,1)',
        background: 'linear-gradient(90deg, rgba(0,0,1,1) 0%, rgba(46,66,114,1) 50%, rgba(0,0,1,1) 100%)',
        width: '100%'
        
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        // flexBasis: '33.33%',
        // flexShrink: 0,
        color: '#fef1e0',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(18),
        color: theme.palette.text.secondary,
    },
    Accordion: {
        marginBottom: 10,
        backgroundColor: '#1f6fdb',
        color:'white'
    },
    AccordionDetails: {
        backgroundColor: '#fef1e0', 

    },
    details: {
        color: '#3b2b29',
        fontSize: theme.typography.pxToRem(18), 
        fontFamily: 'Roboto',
    }

}));


export default useStyles;