"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = (app) => {
    app.get("/", (req, res) => {
        res.send({
            status: 200,
            data: {
                msg: "success",
            },
        });
    });
};
exports.default = routes;
