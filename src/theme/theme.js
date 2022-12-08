import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#691B70",
      gray: "#5D586C",
      black: "#231F20",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "0.6rem 2.5rem",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});
