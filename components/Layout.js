import React from 'react';
import Container from "@mui/material/Container";
import Header from '../components/Header';
import Footer from "./Footer";
import Head from "next/head";

const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "0.8em",
    marginRight: "0.8em",
    marginBottom: "5em",
    minWidth: "100vh",
};


const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
                <title>{title ? `${title}- Next Amazona` : 'Next Amazona'}</title>
            </Head>
            <Header/>
            <Container sx={{...style}}>
                {children}
            </Container>
            <Footer/>
        </div>
    );
}


export default Layout;