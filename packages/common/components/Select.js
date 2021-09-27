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
const Select = (_a) => {
    var { children, backgroundColor = "white", size = "md", style } = _a, rest = __rest(_a, ["children", "backgroundColor", "size", "style"]);
    const myRem = {
        sm: ".7rem",
        md: "1rem",
        lg: "1.3rem",
    };
    const styles = Object.assign(Object.assign({}, style), { backgroundColor, padding: `calc(${myRem[size]} / 3) calc(${myRem[size]}/2)`, borderRadius: `calc(${myRem[size]} / 3)`, fontSize: myRem[size], color: backgroundColor === "black" ? "white" : "black", cursor: "pointer", border: "1px solid gray" });
    return ((0, jsx_runtime_1.jsx)("select", Object.assign({ style: styles }, rest, { children: children }), void 0));
};
exports.default = Select;
