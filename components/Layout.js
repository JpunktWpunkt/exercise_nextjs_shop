import React from 'react';
import Container from "@mui/material/Container";
import Header from '../components/Header';
import Footer from "./Footer";

const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "0.8em",
    marginRight: "0.8em",
    marginBottom: "5em",
    minWidth: "100vh",
};


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <Container sx={{...style}}>
                {children}
            </Container>
            <Footer/>
        </div>
    );
}


export default Layout;