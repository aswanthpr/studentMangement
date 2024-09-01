"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const adminLogin_1 = require("../controller/adminLogin");
const home_1 = require("../controller/home");
router.get("/", adminLogin_1.getLogin)
    .post("/", adminLogin_1.postLogin)
    .get("/home", home_1.homeController.getHome)
    .post("/addStudent", home_1.homeController.addStudent)
    .put("/editStudent", home_1.homeController.editStudent)
    .delete("/deleteStudent", home_1.homeController.deleteStudent);
