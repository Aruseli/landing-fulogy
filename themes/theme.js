import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const fontFamily = '"MuseoSansCyrl"';

const th = createMuiTheme({});
// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F37E78',
      light: '#FDFBFC',
      dark: '#F37E78',
    },
    secondary: {
      main: '#1a1a1a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fcfcfc',
    },
  },
  typography: {
    fontFamily,
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.3,
      fontFamily,
      color: '#1a1a1a',
      [th.breakpoints.up('md')]: {
        color: '#252049',
      }
    },
    h2: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.3,
      fontFamily,
      color: '#1a1a1a'
    },
    h3: {
      textTransform: 'uppercase',
      lineHeight: 1.4,
      fontFamily,
      fontSize: 16,
      fontWeight: 500,
      color: '#1a1a1a'
    },
    h4: {
      fontWeight: 500,
      textTransform: 'uppercase',
      fontFamily,
      lineHeight: 1.4,
      fontSize: 18,
      color: '#1a1a1a'
    },
    h5: {
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.3,
      fontFamily,
      color: '#F37E78' 
    },
    subtitle1: {
      lineHeight: 1.4,
      fontFamily,
      fontSize: 16,
      fontWeight: 300,
      color: '#1a1a1a'
    },
    subtitle2: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.3,
      color: '#fff'
    },
    body1: {
      lineHeight: 1.4,
      fontFamily,
      fontSize: 16,
      fontWeight: 300,
      color: '#1a1a1a',
      [th.breakpoints.up('md')]: {
        lineHeight: 1.5,
      }
    },
    body2: {
      lineHeight: 1.4,
      fontFamily,
      fontSize: 16,
      fontWeight: 500,
      color: '#1a1a1a'
    },
    button: {
      fontFamily
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        '&$disabled': {
          backgroundColor: '#f39c9c',
          color: '#fff'
        },
        color: '#fff',
        boxShadow: '0px 5px 5px 0 rgba(0, 0, 0, .1)',
        [th.breakpoints.up('md')]: {
          boxShadow: '0 0 0 0 #fff',
        },
        '&:hover': {
          boxShadow: '0 0 0 0 #fff !important',
          backgroundColor: '#f39c9c',
          [th.breakpoints.up('md')]: {
            boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1) !important',
          },
        },
        '&:active': {
          boxShadow: '0 0 0 0 #fff !important',
          backgroundColor: '#f39c9c',
        }
      },
      containedPrimary: {
        color: '#fff',
      },
      containedSecondary: {
        color: '#fff'
      },
      outlined: {
        border: '1px solid #F37E78',
        '&:active': {
          backgroundColor: '#F37E78',
          color: '#fff',
        },
        '&:hover': {
          backgroundColor: '#F37E78',
          color: '#fff',
        },
      },
      text: {
        '&:active': {
          color: '#F37E78',
        }
      },
      sizeSmall: {
        // padding: '15px 25px',
        textTransform: 'none',
        fontSize: 18
      },
      sizeLarge: {
        // padding: '25px 75px',
        textTransform: 'none',
        fontSize: 18
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 2px 13px 0 rgba(0,0,0,0.05)'
      },
      elevation5: {
        boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1)',
      },
      rounded: {
        borderRadius: 50
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.5rem'
      }
    },
    MuiTouchRipple: {
      root: {
        color: '#fff'
      }
    },
    MuiInput: {
      input: {
        fontSize: 18,
        marginTop: 8,
      }
    }
  },
});
