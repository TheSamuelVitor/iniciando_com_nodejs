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
exports.returnAll = exports.addTask = void 0;
let tasks = [];
/**
 * funcao para adicionar tarefa no registro
 *
 * @param  {[string]} title titulo da task a ser adicionada
 * @param  {[string]} description descricao da task a ser adicionada
 * @return {[Task]} task adicionada
 */
function addTask(title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const task = {
            id: tasks.length + 1,
            title: title,
            description: description,
            completed: false,
        };
        tasks.push(task);
        return task;
    });
}
exports.addTask = addTask;
;
function returnAll() {
    return __awaiter(this, void 0, void 0, function* () {
        if (tasks.length == 0) {
            throw new Error("nenhuma task cadastrada");
        }
        return tasks;
    });
}
exports.returnAll = returnAll;
;
