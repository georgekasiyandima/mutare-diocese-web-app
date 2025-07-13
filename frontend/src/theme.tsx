import { createTheme } from '@mui/material/styles';

// Custom color palette for Mutare Diocese
const colors = {
  primary: {
    main: '#bfa14a', // Gold accent color
    light: '#d4c17a',
    dark: '#a08c3a',
    contrastText: '#fff',
  },
  secondary: {
    main: '#5C4033', // Brown color
    light: '#7a5a4a',
    dark: '#3e2b23',
    contrastText: '#fff',
  },
  background: {
    default: '#fafafa',
    paper: 'rgba(255,255,255,0.95)',
  },
  text: {
    primary: '#5C4033',
    secondary: '#666666',
  },
  error: {
    main: '#d32f2f',
  },
  warning: {
    main: '#ed6c02',
  },
  info: {
    main: '#0288d1',
  },
  success: {
    main: '#2e7d32',
  },
};

// Custom typography
const typography = {
  fontFamily: '"Lora", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    color: colors.secondary.main,
  },
  h2: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.3,
    color: colors.secondary.main,
  },
  h3: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.3,
    color: colors.secondary.main,
  },
  h4: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.4,
    color: colors.secondary.main,
  },
  h5: {
    fontFamily: '"Lora", serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    color: colors.secondary.main,
  },
  h6: {
    fontFamily: '"Lora", serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
    color: colors.secondary.main,
  },
  subtitle1: {
    fontFamily: '"Lora", serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    color: colors.secondary.main,
  },
  subtitle2: {
    fontFamily: '"Lora", serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    color: colors.secondary.main,
  },
  body1: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
    color: colors.text.primary,
  },
  body2: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: colors.text.secondary,
  },
  button: {
    fontFamily: '"Lora", serif',
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  caption: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    color: colors.text.secondary,
  },
  overline: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    textTransform: 'uppercase' as const,
    color: colors.text.secondary,
  },
};

// Custom component styles
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none' as const,
        fontWeight: 600,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
          transform: 'translateY(-2px)',
          transition: 'all 0.3s ease',
        },
      },
      contained: {
        backgroundColor: colors.primary.main,
        color: colors.primary.contrastText,
        '&:hover': {
          backgroundColor: colors.primary.dark,
        },
      },
      outlined: {
        borderColor: colors.primary.main,
        color: colors.primary.main,
        '&:hover': {
          backgroundColor: colors.primary.main,
          color: colors.primary.contrastText,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: colors.background.paper,
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(44,32,18,0.1)',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(44,32,18,0.15)',
          transition: 'box-shadow 0.3s ease',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 16px rgba(44,32,18,0.10)',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        '&.gradient-text': {
          background: 'linear-gradient(90deg, #bfa14a 0%, #5C4033 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: colors.primary.main,
        textDecoration: 'none',
        '&:hover': {
          color: colors.primary.dark,
          textDecoration: 'underline',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        backgroundColor: colors.primary.light,
        color: colors.primary.contrastText,
        fontWeight: 600,
      },
    },
  },
};

// Create the theme
const theme = createTheme({
  palette: colors,
  typography,
  components,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme; 