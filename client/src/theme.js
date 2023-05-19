import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#06283D",
  secondary: "#256D85",
  textGrey: "#6F7E8C",
  textDark: "#86A3B8",
  white: "#ffff",
  black: "#000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    textDark: {
      main: Colors.textDark,
    },
    textGrey: {
      main: Colors.textGrey,
    },
    white: {
      main: Colors.white,
    },
    black: {
      main: Colors.black,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
