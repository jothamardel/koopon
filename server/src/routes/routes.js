const express = require("express");
const { get_greeting } = require("../controllers");
const { createKoopon } = require("../controllers/koopon.controller");

const Routes = express.Router();

Routes.get("/", get_greeting);
Routes.post("/koopon", createKoopon);
module.exports = Routes;
