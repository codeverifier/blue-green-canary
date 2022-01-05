import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: "#01111a"
        },
        text: {
            primary: "#ffffff"
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        }
    }
    
});

export default theme;