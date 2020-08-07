import React from 'react';
// import { Route, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './ProductListStyling';
import SingleProduct from './../SingleProduct/SingleProduct';
import ProductModal from './../ProductModal/ProductModal';
import { masterProductList } from './../../Assets/MockData/DataProducts';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import bg_image from './../../Assets/Images/bg5.jpg';



function ProductList(props) {


    const styles = useStyles();
    let productListHeader = null;


    console.log(props.current_product);


    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        console.log("handleOpen is being called");
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    if (props.currentRouterPath === '/productList') {
        console.log("Looks like we have the correct router path!!!");
        productListHeader =
            <Box>
                <Box>
                    <Typography variant="h3">OUR PRODUCTS</Typography>
                </Box>
            </Box>;
    }

    // function handleSavingSelectedProduct(productId) {
    //     const { dispatch } = props;
    //     const action = {
    //         type: 'SELECT_PRODUCT',
    //         productId: productId
    //     };
    //     dispatch(action);
    // }


    return (
        <Box className={styles.productListContainer}>
            {productListHeader}
            <Box className={styles.mainGridContainer}>
                <Grid container  >


                    <Grid item xs={0} sm={1} md={2}></Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        {/* Header Grid Container */}

                        <Box style={{
                            height: 150,
                            // backgroundColor: '#1a2642',
                            background: `url('${bg_image}') no-repeat`,
                            backgroundSize: '100%',
                            backgroundColor: '#2196f326',
                            marginBottom: '50px',
                            borderRadius: '15px',
                            boxShadow: '0px 0px 5px #0051be',
                        }}>
                            <Box style={{
                                height: '100%',
                                width: '100%',
                                // backgroundColor: '#1a2642',
                                backgroundColor: 'rgba(10, 35, 89, .7)',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Typography variant="h3" style={{
                                    color: '#fee2be',
                                    // fontFamily: 'Patua One, cursive',
                                    letterSpacing: '.02em',
                                    fontFamily: 'Righteous, cursive',
                                }}>
                                    PRODUCTS
                        </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={1} md={2}></Grid>


                    <Grid item xs={1} md={2} lg={2} xl={1}></Grid>
                    <Grid item xs={10} md={8} lg={8} xl={10}>
                        <Grid container spacing={6} >
                            {masterProductList.map((product) =>
                                <SingleProduct
                                    handleOpen={handleOpen}
                                    title={product.title}
                                    productId={product.productId}
                                    description={product.description}
                                    mainImage={product.mainImage}
                                    id={product.id}
                                    key={product.key} />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <div>
                <button type="button" onClick={handleOpen}>CLICK HERE TO OPEN MODAL</button>
                <ProductModal open={open} onClose={handleClose} />
            </div>
        </Box>
    );
}


ProductList.propTypes = {
};


const mapStateToProps = state => {
    return {
        // current_product: state.current_product
    };
};


export default connect(mapStateToProps)(ProductList);