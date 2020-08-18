// APP Config
const express = require("express");
const multer = require("multer");
const routes = express.Router();
const uploadConfig = require("../config/upload");
const uploader = multer(uploadConfig);
const ErrorHandlerRequest = require("./Errors/ErrorHandlerRequest");

// Controllers
const {
  create: userCreate,
  login: userLogin,
} = require("./Controllers/UserController");
const {
  index: getLocations,
  store: saveLocations,
} = require("./Controllers/LocationController");

// Middlewares
const authMiddleware = require("./Middlewares/auth");

// Request Validations
const CreateUserValidation = require("./Requests/CreateUserRequest");
const UserLoginValidation = require("./Requests/UserLoginRequest");
const CreateLocationRequest = require("./Requests/CreateLocationRequest");

//ROUTES
routes.post(
  "/users/create",
  CreateUserValidation,
  ErrorHandlerRequest,
  userCreate
);

routes.post("/login", UserLoginValidation, ErrorHandlerRequest, userLogin);

routes.get("/locations", authMiddleware, getLocations);

routes.post(
  "/location/create",
  authMiddleware,
  CreateLocationRequest,
  ErrorHandlerRequest,
  uploader.array("photos", 10),
  saveLocations
);

module.exports = routes;
