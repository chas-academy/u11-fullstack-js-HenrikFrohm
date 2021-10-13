import jwt from "jsonwebtoken";

// Similar asynchronous function methods to controllers, but now including next method, were a promise is returned and will be fullfilled with the next value.
// Purpose is to identify that the user is who he claims to be with json web token. If token length is higher than 500, then it's google auth.
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    // If the auther is identified correctly, then the next method is used to go through controllers actions.
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
