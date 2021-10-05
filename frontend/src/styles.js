import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 3,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'inherit',
  },
  heading: {
    color: 'black',
    fontFamily: 'Lucida Console, Courier New, monospace'
  },
  image: {
    marginLeft: '15px',
  },
}));