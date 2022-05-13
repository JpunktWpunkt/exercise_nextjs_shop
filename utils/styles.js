import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: "#000000",
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh'
    }
});
export default useStyles;