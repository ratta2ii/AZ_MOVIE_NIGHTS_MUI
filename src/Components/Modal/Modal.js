import React from 'react';
import { connect } from 'react-redux';
import useStyles from './ProductModalStyling';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import StyledCard from './../StyledCard/StyledCard';



function ProductModal(props) {

    // const [ current_product ] = props;

    // console.log("ProductModal current_product Props", props.current_product);

    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                {...props}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <Grid container className={classes.modalGridContainer}>
                            {/* Left Margin */}
                            <Grid item xs={0} sm={2} md={1} lg={2}></Grid>




                            <Grid item xs={12} sm={8} md={10} lg={8} >
                                <StyledCard {...props} />
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        current_product: state.current_product
    };
};


export default connect(mapStateToProps)(ProductModal);