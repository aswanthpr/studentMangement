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
exports.homeController = void 0;
const studentModel_1 = require("../model/studentModel");
const getHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stuData = yield studentModel_1.studentSchema.find({}).sort({ createdAt: -1 });
        res.render("home", { stuData });
    }
    catch (error) {
        console.log(error);
    }
});
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, gender, studentClass } = req.body;
        console.log(name, age, gender, studentClass, 'sf');
        const studData = yield studentModel_1.studentSchema.findOne({ name: name, age: age });
        if (!studData) {
            const studData = new studentModel_1.studentSchema({
                name,
                age,
                gender,
                class: studentClass,
            });
            const saveData = yield studData.save();
            if (saveData) {
                res.json({ success: true, message: 'Details saved successfully' });
            }
            else {
                res.json({ success: false, message: "error while saving details" });
            }
        }
        else {
            res.json({ success: false, message: "student is exitst" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const editStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, studentClass, gender, studId } = req.body;
        console.log(name, age, studentClass, gender, studId);
        const studData = yield studentModel_1.studentSchema.findById(studId);
        if (studData) {
            const updateData = yield studentModel_1.studentSchema.findByIdAndUpdate(studId, { $set: { name: name, age: age, class: studentClass, gender: gender } }, { new: true });
            if (updateData) {
                res.json({ success: true, message: "successfully updated" });
            }
            else {
                res.json({ success: false, message: "updation failed" });
            }
        }
        else {
            res.json({ success: false, message: "student not exist" });
        }
    }
    catch (error) {
    }
});
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.body;
        console.log(studentId, 'ofijaoisfsthdiundet');
        const deleted = yield studentModel_1.studentSchema.findByIdAndDelete({ _id: studentId });
        if (deleted) {
            res.status(200).json({ success: true, message: "deleted successfully" });
        }
        else {
            res.status(404).json({ success: false, message: "student not found" });
        }
    }
    catch (error) {
    }
});
const signout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.homeController = { getHome, addStudent, editStudent, deleteStudent, signout };
