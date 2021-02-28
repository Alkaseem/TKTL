const logger = require("./logger");
const jwt = require("jsonwebtoken");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({
      error: "invalid token",
    });
  } else if (error.name === "ReferenceError") {
    console.log(error);
    return response.status(401).json({
      error: error,
    });
  }

  next(error);
};

// const tokenExtractor = (request, response, next) => {
//   const authorization = request.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     console.log(authorization.substring(7));
//     request.token = authorization.substring(7);
//   }
//   next();
// };

const tokenExtractor = async (request, response, next) => {
  // Gather the jwt access token from the request header
  const authorization = request.get("authorization");
  const token = authorization && authorization.split(" ")[1];

  // if there isn't any token
  if (token == null)
    return response.sendStatus(401).json({ error: "UnAuthorized" });

  const decoded = await jwt.verify(token, process.env.SECRET);
  if (!decoded)
    return response.sendStatus(403).json({ error: "User not Found" });
  request.user = decoded;
  next(); // pass the execution off to whatever request the client intende
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
};
