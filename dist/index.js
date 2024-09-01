"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const nocache_1 = __importDefault(require("nocache"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = require("./config/database");
(0, database_1.dbConnect)();
const path_1 = __importDefault(require("path"));
const admin_1 = require("./routes/admin");
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
app.use((0, nocache_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: "secrets",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, sameSite: 'strict' }
}));
app.set('views', path_1.default.join(__dirname, "views"));
app.set('views', ["./views/register", "./views/admin"]);
app.set("view engine", "ejs");
app.use('/', admin_1.router);
app.listen(port, () => {
    console.log("app listening on port 3000,http://localhost:3000");
});
