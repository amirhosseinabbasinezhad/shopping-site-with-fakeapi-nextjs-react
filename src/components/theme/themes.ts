
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['secondary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['secondary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        secondary: {
            main: "#f79da5",
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },

    },
});
export default theme;