"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StLamports = exports.Lamports = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
class Lamports {
    constructor(lamports) {
        this.lamports = new bn_js_1.default(lamports);
    }
}
exports.Lamports = Lamports;
class StLamports {
    constructor(stLamports) {
        this.stLamports = new bn_js_1.default(stLamports);
    }
}
exports.StLamports = StLamports;
//# sourceMappingURL=types.js.map