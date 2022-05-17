import React from 'react';
import {Typography} from "@mui/material";

const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "0.8em",
    marginRight: "0.8em",
    marginBottom: "5em"
};
const Footer = () => {
    return (
        <div>
            <Typography sx={{...style}}>All rights reserved @JpunktWpunkt</Typography>
        </div>
    );
}


export default Footer;