import {createTheme} from "@mui/material/styles";

const amazonaYellow = "#f0c000";
const famHubBlue = "#30638E";
const famHubRed = "#D1495B";
const famHubYellow = "#EDAE49";
const famHubGrey = "#e0e8e3";
const famHubAddGreen = "#5B764A";
const MuiToolbar = {
    styleOverrides: {
        root: {
            justifyContent: "space-between",
        },
    },
};

const MuiButton = {
    defaultProps: {
        variant: "contained",
        disableRipple: true, //Ripple Effekt weg
        disableElevation: true, //schlagschatten weg
    },
    styleOverride: {
        //global alles rund ausser Button
        root: {
            borderRadius: 30,
        },
    },
};

//TODO hier noch anpassen
const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: `${amazonaYellow}`,
            contrastText: "#fff",
        },
        secondary: {
            main: `${famHubRed}`,
            contrastText: "#fff",
        },
        background: {
            default: `${famHubAddGreen}`,
            paper: `${famHubGrey}`,
        },
    },
    typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
        },

        h2: {
            fontFamily: "'Adobe Handwriting',cursive",
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
        },

        h3: {
            fontFamily: "'Adobe Handwriting',cursive",
            fontSize: '1.2rem',
            fontWeight: 400,
            margin: '1rem 0',
        },

        h4: {
            fontFamily: "'Adobe Handwriting',cursive",
            fontSize: '1.0rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
        h6: {
            fontFamily: "'Adobe Handwriting',cursive",
            fontSize: '0.8rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
        shape: {
            borderRadius: 16,
        },
    },
    components: {
        MuiToolbar,
        MuiButton,
    },
});

export default theme;
