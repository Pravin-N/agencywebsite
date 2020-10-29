import { createMuiTheme } from "@material-ui/core/styles";

const agwhite = "#fff";
const aggreen = "#D9DF1D";
const agblack = "#000";
const agcustom = "#2B2B4F"
const agfooter = "#08071c"

export default createMuiTheme({
  palette: {
    common: {
      white: `${agwhite}`,
      green: `${aggreen}`,
      black: `${agblack}`,
      custom: `${agcustom}`,
      footer: `${agfooter}`
    },
    primary: {
      main: `${agwhite}`,
    },
    secondary: {
      main: `${aggreen}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
