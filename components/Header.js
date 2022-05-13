import React from 'react';
import {AppBar} from '@mui/material';
import Head from "next/head";
import {Toolbar, Typography} from "@material-ui/core";

const navBar = {
    background: "#22303E",
    '& a': {
        color: '#ffffff',
        marginLeft: 10,
    }

};

const Header = () => {
    return (
        <div>
            <Head>
                <title>Next Amazona</title>
            </Head>
            <AppBar position="static" sx={{...navBar}}>
                <Toolbar>
                    <Typography>amazona</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;