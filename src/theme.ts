import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3daede",
      light: "#67c5ee",
      dark: "#2b8bb0",
    },
    secondary: {
      main: "#a5e393",
      light: "#9fd591",
      dark: "#53774a",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333", // primary text color
      secondary: "#555555", // secondary text color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#f4f4f4",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "4px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#86d770",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#41982b",
          },
        },
      },
    },
  },
});

export default theme;