"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleFunction = exports.MyHeader = void 0;
var MyHeader_1 = require("./components/MyHeader");
Object.defineProperty(exports, "MyHeader", { enumerable: true, get: function () { return __importDefault(MyHeader_1).default; } });
var utilFunctions_1 = require("./utils/utilFunctions");
Object.defineProperty(exports, "sampleFunction", { enumerable: true, get: function () { return utilFunctions_1.sampleFunction; } });
