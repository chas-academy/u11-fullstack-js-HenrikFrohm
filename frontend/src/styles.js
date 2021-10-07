import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // makes columns align in reverse for small devices, giving priority to forms
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
