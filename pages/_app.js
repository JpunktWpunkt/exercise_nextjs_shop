import '../styles/globals.css'
import {ThemeProvider} from "@mui/material";
import theme from "../styles/theme";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Head>
                    <title key="title">My amazona playground</title>
                    <meta key="description" name="description" content="This is my amazona playground"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}

export default MyApp
