"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    route(app) {
        app.get('/test', (req, res) => {
            res.status(200).json({ message: "Successfull" });
        });
    }
}
exports.TestRoutes = TestRoutes;
