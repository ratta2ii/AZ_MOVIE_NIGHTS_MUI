import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';



export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box className={classes.root}>
            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>


            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>


            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>

            
            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>


            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>


            <Accordion 
                className={classes.Accordion}
                // expanded={expanded === 'panel1'} 
                onChange={handleChange('panel1')} 
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Do I need any special permits in order to have a movie night?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Typography className={classes.details}>
                        Yes, you will need to get permits from the city in order to have a movie night. This is an easy process though, and should only take a couple of minutes. Please see the following... <a href="http://www.google.com">Link to get city permits</a>
                    </Typography>
                    
                    
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}