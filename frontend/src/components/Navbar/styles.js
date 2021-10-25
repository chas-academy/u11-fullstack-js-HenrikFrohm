import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 3,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 50px",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    color: "black",
    textDecoration: "none",
    fontFamily: "Roboto",
    fontSize: "2em",
  },
  image: {
    marginLeft: "10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "300px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    marginBottom: "2px",
    fontFamily: "Roboto",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "black",
    marginBottom: "2px",
    fontFamily: "Roboto",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  purple: {
    color: theme.palette.getContrastText(indigo[400]),
    backgroundColor: indigo[400],
  },
}));
