"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../utils/logger"));
const taskController_1 = require("../controllers/taskController");
const taskRouter = (0, express_1.Router)();
taskRouter.post("", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        (0, logger_1.default)("/task", "POST", 400, "requisicao deve conter campos titulo e descricao", res);
        return;
    }
    try {
        let task = (0, taskController_1.addTask)(title, description);
        (0, logger_1.default)("task", "POST", 201, task, res);
        return;
    }
    catch (err) {
        (0, logger_1.default)("/task", "POST", 400, "erro ao adicionar a task", res);
        return;
    }
});
taskRouter.get("", (req, res) => {
    try {
        const tasks = (0, taskController_1.returnAll)();
        (0, logger_1.default)("/task", "GET", 200, tasks, res);
    }
    catch (error) {
        (0, logger_1.default)("/task", "GET", 400, error, res);
        return;
    }
});
exports.default = taskRouter;
