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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const PORT = 8080;
const MONGO_URI = "mongodb+srv://admin:admin123@hop-2.xrzll2f.mongodb.net/?retryWrites=true&w=majority";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(MONGO_URI, {}).then(() => {
            console.log("Connected DB");
        });
    }
    catch (error) {
        console.error("Could not connect to DB");
        process.exit(1);
    }
    (0, routes_1.default)(app);
}));
