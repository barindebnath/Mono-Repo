"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = (_a) => {
    var { children, backgroundColor = "lightblue", size = "md", color = "black" } = _a, rest = __rest(_a, ["children", "backgroundColor", "size", "color"]);
    const myRem = {
        sm: ".7rem",
        md: "1rem",
        lg: "1.3rem",
    };
    const styles = {
        backgroundColor,
        padding: myRem[size],
        borderRadius: myRem[size],
        border: "none",
        fontSize: myRem[size],
        color,
        cursor: "pointer",
    };
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ style: styles }, rest, { children: children }), void 0));
};
exports.default = Button;
