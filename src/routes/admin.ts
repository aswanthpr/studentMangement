
import {Request ,Response} from "express"
import express from "express"
const router  = express.Router()
import {getLogin,postLogin} from "../controller/adminLogin"
import {homeController} from "../controller/home"

router.get("/",getLogin)
      .post("/",postLogin)
      .get("/home",homeController.getHome)
      .post("/addStudent",homeController.addStudent)
      .put("/editStudent",homeController.editStudent)
      .delete("/deleteStudent",homeController.deleteStudent)

export{router}