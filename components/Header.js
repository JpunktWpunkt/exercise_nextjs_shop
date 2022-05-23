import React from 'react';
import {AppBar, Box, Link} from '@mui/material';
import Head from "next/head";
import {Toolbar, Typography} from "@material-ui/core";
import NextLink from "next/link";

const navBar = {
    background: "#22303E",
    '& a': {
        color: '#ffffff',
        marginLeft: 10,
    }
};

const typoBrand = {
    fontWeight: "bold",
    fontSize: "2.5rem",
};

const grow = {
    flexGrow: "1",
};

const Header = () => {
    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar position="static" sx={{...navBar}}>
                <Toolbar>
                    <NextLink href="/" passHref>{/*its necessary to put it here passHref, is nextjs specific way*/}
                        <Link>
                            <Typography sx={{...typoBrand}}>amazona</Typography>
                        </Link>
                    </NextLink>
                    <Box sx={{...grow}}>
                        <div>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Login</Link>
                            </NextLink>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;