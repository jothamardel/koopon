const express = require("express");
const { get_greeting } = require("../controllers");

const Routes = express.Router();

Routes.get("/", get_greeting);
module.exports = Routes;
