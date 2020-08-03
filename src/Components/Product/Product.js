import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '../../Components/Navigation/node_modules/@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './SingleProductStyling';


function Product(props) {

    const styles = useStyles();

    function handleModal(product) {

       console.log("Modal event: ", product);

        /* Open modal */

        const { dispatch } = props;
        const action = {
            type: 'SELECT_PRODUCT',
            payload: product
        };
        dispatch(action);
        props.handleOpen();
    }


    return (
        <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Card className={styles.root} onClick={() => { handleModal(props) }}>
                <CardActionArea
                    className={styles.CardActionArea}
                    style={{ outline: "none" }}
                >
                    <CardMedia
                        className={styles.CardMedia}
                        image={props.mainImage}
                        title={props.title}
                    />
                    <CardContent className={styles.CardContent}>
                        <Typography
                            className={styles.title}
                            // gutterBottom 
                            variant="h6"
                            component="h2"
                        >
                            {props.title}
                        </Typography>
                        {/* <Typography 
                            variant="body2" 
                            color="textSecondary" 
                            component="p" 
                        >
                            {props.description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>

                <CardActions className={styles.action}>
                    <AddCircleIcon fontSize="small" />
                    <Typography
                        className={styles.addWishText}
                        variant="body2"
                    >
                        ADD TO WISH LIST
                    </Typography>
                    <Button size="small" color="primary" style={{ margin: 'auto' }} >
                        {/* <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.mainImage}
                        >
                            Learn More
                        </a> */}
                        Learn More
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    )
}


const mapStateToProps = state => {
    return {
        current_product: state.current_product
    };
};


export default connect(mapStateToProps)(Product);