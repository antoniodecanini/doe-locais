const express = require('express');
const multer = require('multer');
const UserController = require('./Controllers/UserController');
const LocationController = require('./Controllers/LocationController');
const authMiddleware = require("./Middlewares/auth");

const routes = express.Router();
const uploadConfig = require('../config/upload');
const uploader = multer(uploadConfig);

routes.get ("/", (req, res) => {
  res.send("Hello!")
});

routes.post("/users/create", UserController.create);
routes.post("/users/login", UserController.login);

routes.use(authMiddleware);

routes.post("/location/create", uploader.array('photos', 10), LocationController.store);

module.exports = routes;