import React from 'react';
import {useRouter} from 'next/router';
import Image from "next/image";
import NextLink from "next/link";
import data from "../../utils/data";
import {Box, Button, Card, Grid, Link, List, ListItem, Typography} from "@mui/material";
import Layout from "../../components/Layout";


const styleBox = {
    marginTop: 10,
    marginBottom: 10,
};


const ProductScreen = () => {
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find(a => a.slug === slug)/*//only for demo*/
    if (!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <Layout title={product.name}>
            <Box sx={{...styleBox}}>
                <NextLink href="/" passHref>
                    <Link>
                        <Typography>
                            Back to products
                        </Typography>
                    </Link>
                </NextLink>
            </Box>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography component="h1" variant="h1">{product.name}</Typography>
                        </ListItem> {/*Important for SEO*/}
                        <ListItem><Typography>Category: {product.category}</Typography></ListItem>
                        <ListItem><Typography>Brand: {product.brand}</Typography></ListItem>
                        <ListItem><Typography>Rating: {product.rating} stars
                            ({product.numReviews})</Typography></ListItem>
                        <ListItem><Typography>Description: {product.description} </Typography></ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}><Typography>Price</Typography></Grid>
                                    <Grid item xs={6}><Typography>${product.price}</Typography></Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}><Typography>Status</Typography></Grid>
                                    <Grid item
                                          xs={6}><Typography>{product.countInStock > 0 ? 'In stock' : 'Unavaible'}</Typography></Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary">
                                    Add to card
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>

        </Layout>
    );
}


export default ProductScreen;