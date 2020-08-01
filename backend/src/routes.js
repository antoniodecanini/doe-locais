// APP Config
const express = require('express');
const multer = require('multer');
const routes = express.Router();
const uploadConfig = require('../config/upload');
const uploader = multer(uploadConfig);
const ErrorHandlerRequest = require('./Errors/ErrorHandlerRequest');

// Controllers
const {create,login} = require('./Controllers/UserController');
const LocationController = require('./Controllers/LocationController');

// Middlewares
const authMiddleware = require("./Middlewares/auth");


// Request Validations
const CreateUserValidation = require('./Requests/CreateUserRequest');
const UserLoginValidation = require('./Requests/UserLoginRequest');


//ROUTES 
routes.post
(
    "/users/create",
    CreateUserValidation,
    (req,res) => { ErrorHandlerRequest(req,res,create)}
);

routes.post
(
  "/login",
  UserLoginValidation,
  (req,res) => { ErrorHandlerRequest(req,res,login)}
);

routes.use(authMiddleware);

routes.get("/locations", LocationController.index);
routes.post("/location/create", uploader.array('photos', 10), LocationController.store);

module.exports = routes;