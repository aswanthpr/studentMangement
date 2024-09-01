"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.getLogin = void 0;
// import userSchema from  "../model/loginModel";
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render("login");
    }
    catch (error) {
        console.log(error);
    }
});
exports.getLogin = getLogin;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Email = "admin@gmail.com";
    const Password = "123qwe";
    console.log("hasiii", req.body);
    try {
        const { email, password } = req.body;
        if (Email === email || Password === password) {
            return res.json({ success: true });
        }
        else {
            return res.json({ success: false, message: "email or password is incorrect" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.postLogin = postLogin;
