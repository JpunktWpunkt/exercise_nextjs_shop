import Layout from '../components/Layout'
import {Grid, Card, CardActionArea, Typography, CardContent, CardActions, Button} from "@mui/material";
import data from '../utils/data';
import Image from "next/image";

export default function Home() {
    return (
        <Layout>
            <h1>Products</h1>
            <Grid container spacing={3}>
                {data.products.map((product) => (
                    <Grid item md={4} key={product.name}>
                        <Card>
                            <CardActionArea sx={{width: "300px", height: "300px"}}>
                                <Image src={product.image}
                                       layout='fill'
                                       alt='Picture from {product.name}'/>
                                <CardContent>
                                    <Typography>
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Typography>
                                    ${product.price}
                                </Typography>
                                <Button size="small" color="primary">Add to card</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}
